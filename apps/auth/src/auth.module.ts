import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [AuthController],
})
export class AuthModule {}
