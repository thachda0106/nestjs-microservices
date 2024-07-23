import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaModule } from '@libs/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
