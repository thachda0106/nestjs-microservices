import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccessService } from './services/access.service';
import { LOGIN_MESSAGE } from '@libs/infrastructure/modules/auth/message-patterns/access';
import { LoginAccountDto } from '@libs/infrastructure/modules/auth/dto/login-account.dto';

@Controller()
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @MessagePattern(LOGIN_MESSAGE)
  login(@Payload() loginPayload: LoginAccountDto) {
    return this.accessService.login(loginPayload);
  }
}
