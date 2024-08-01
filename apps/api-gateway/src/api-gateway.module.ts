import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SERVICES_PROVIDER } from './configs/services';
import { ThrottlerModule } from '@nestjs/throttler';
import { REQUEST_LIMIT } from './configs/request-limiter';
import { ConfigModule } from '@nestjs/config';
import { TokenPassportModule } from '@libs/token-passport';
import { TokenPassportStrategy } from '@libs/token-passport/token-passport.strategy';
import { APP_GUARD } from '@nestjs/core';
import { TokenPassportAuthGuard } from '@libs/token-passport/token-passport.guard';
import { RolesGuard } from './guards/roles.guard';
import { AccessController } from './modules/auth/access.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register(SERVICES_PROVIDER),
    ThrottlerModule.forRoot([REQUEST_LIMIT]),
    TokenPassportModule,
  ],
  controllers: [ApiGatewayController, AccessController],
  providers: [
    ApiGatewayService,
    TokenPassportStrategy,
    { provide: APP_GUARD, useClass: TokenPassportAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class ApiGatewayModule {}
