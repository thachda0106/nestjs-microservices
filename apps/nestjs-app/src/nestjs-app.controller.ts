import { Controller, Get } from '@nestjs/common';
import { NestjsAppService } from './nestjs-app.service';

@Controller()
export class NestjsAppController {
  constructor(private readonly nestjsAppService: NestjsAppService) {}

  @Get()
  getHello(): string {
    return this.nestjsAppService.getHello();
  }
}
