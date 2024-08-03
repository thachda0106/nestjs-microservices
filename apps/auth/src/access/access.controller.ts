import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccessService } from './services/access.service';
import { LOGIN_MESSAGE } from '@libs/domain/modules/auth/message-patterns/access';
import { LoginAccountRequestDto } from '@libs/domain/modules/auth/dto/login-account.dto';

@Controller()
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @MessagePattern(LOGIN_MESSAGE)
  login(@Payload() loginPayload: LoginAccountRequestDto) {
    return this.accessService.login(loginPayload);
  }
}
