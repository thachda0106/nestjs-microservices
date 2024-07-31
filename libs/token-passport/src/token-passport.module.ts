import { Module } from '@nestjs/common';
import { TokenPassportService } from './token-passport.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@libs/database';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule, PrismaModule],
  providers: [TokenPassportService],
  exports: [TokenPassportService, PrismaModule],
})
export class TokenPassportModule {}
