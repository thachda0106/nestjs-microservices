import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @MessagePattern({ cmd: 'ping' })
  ping() {
    return of('pong').pipe(delay(1000));
  }
}
