import { Module } from '@nestjs/common';
import { AccessModule } from './access/access.module';

@Module({
  imports: [AccessModule],
  controllers: [],
})
export class AuthModule {}
