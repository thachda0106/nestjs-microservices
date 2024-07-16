import { Injectable } from '@nestjs/common';

@Injectable()
export class NestjsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
