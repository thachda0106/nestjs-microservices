import {
  Controller,
  Body,
  Inject,
  Post,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { FreePassport } from '@libs/token-passport/token-passport.decorator';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from 'apps/api-gateway/src/configs/services';
import {
  LoginAccountRequestDto,
  LoginAccountResponseDto,
} from '@libs/domain/modules/auth/dto/login-account.dto';
import { LOGIN_MESSAGE } from '@libs/domain/modules/auth/message-patterns/access';
import { catchError } from 'rxjs';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AccessController {
  constructor(
    @Inject(SERVICES.Auth) private readonly authService: ClientProxy,
  ) {}

  @ApiOperation({ summary: 'Login account' })
  @ApiBody({
    type: LoginAccountRequestDto,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'Login account successfully.',
    type: LoginAccountResponseDto,
  })
  @FreePassport()
  @Post('login')
  getClassName(@Body() loginPayload: LoginAccountRequestDto) {
    return this.authService.send<string>(LOGIN_MESSAGE, loginPayload).pipe(
      catchError(() => {
        throw new UnauthorizedException();
      }),
    );
  }
}
