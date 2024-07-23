import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SERVICES_PROVIDER } from './configs/services';
import { ThrottlerModule } from '@nestjs/throttler';
import { REQUEST_LIMIT } from './configs/requestLimiter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register(SERVICES_PROVIDER),
    ThrottlerModule.forRoot([REQUEST_LIMIT]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
