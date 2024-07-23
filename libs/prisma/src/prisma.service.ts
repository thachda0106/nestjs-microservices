import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly logger: Logger) {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Connect to database successfully!');
    } catch (error) {
      this.logger.error(error.message);
    }
  }
}
