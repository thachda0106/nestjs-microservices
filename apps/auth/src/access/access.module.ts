import { Module } from '@nestjs/common';
import { AccessService } from './services/access.service';
import { AccessController } from './access.controller';
import { PrismaModule } from '@libs/database';
import { CryptoModule } from '@libs/crypto';
import { TokenModule } from '@libs/token';
import { AccountService } from './services/account.service';
import { AccountTokenService } from './services/account-token.service';

@Module({
  imports: [PrismaModule, CryptoModule, TokenModule],
  controllers: [AccessController],
  providers: [AccessService, AccountService, AccountTokenService],
})
export class AccessModule {}
