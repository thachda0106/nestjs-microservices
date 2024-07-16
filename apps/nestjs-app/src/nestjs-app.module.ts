import { Module } from '@nestjs/common';
import { NestjsAppController } from './nestjs-app.controller';
import { NestjsAppService } from './nestjs-app.service';

@Module({
  imports: [],
  controllers: [NestjsAppController],
  providers: [NestjsAppService],
})
export class NestjsAppModule {}
