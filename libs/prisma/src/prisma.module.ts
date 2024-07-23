import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [PrismaService, Logger],
  exports: [PrismaService],
})
export class PrismaModule {}
