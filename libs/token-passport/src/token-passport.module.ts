import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@libs/database';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule, PrismaModule],
  providers: [Reflector],
  exports: [PrismaModule, Reflector],
})
export class TokenPassportModule {}
