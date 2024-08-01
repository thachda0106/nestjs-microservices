import {
  Controller,
  Body,
  Inject,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { FreePassport } from '@libs/token-passport/token-passport.decorator';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from 'apps/api-gateway/src/configs/services';
import { LoginAccountDto } from '@libs/infrastructure/modules/auth/dto/login-account.dto';
import { LOGIN_MESSAGE } from '@libs/infrastructure/modules/auth/message-patterns/access';
import { catchError } from 'rxjs';

@Controller()
export class AccessController {
  constructor(
    @Inject(SERVICES.Auth) private readonly authService: ClientProxy,
  ) {}

  @FreePassport()
  @Post('login')
  getClassName(@Body() loginPayload: LoginAccountDto) {
    return this.authService.send<string>(LOGIN_MESSAGE, loginPayload).pipe(
      catchError(() => {
        throw new UnauthorizedException();
      }),
    );
  }
}
