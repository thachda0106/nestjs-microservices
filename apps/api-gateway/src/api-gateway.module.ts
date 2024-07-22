import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SERVICES_PROVIDER } from './services';

@Module({
  imports: [ClientsModule.register(SERVICES_PROVIDER)],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
