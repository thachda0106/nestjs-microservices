import { PrismaService } from '@libs/database';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccountTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async updateActiveAccountToken(accountToken: Prisma.tokenUpdateInput) {
    return await this.prisma.token.update({
      data: accountToken,
      where: {
        username: accountToken.account.connect.username,
      },
    });
  }
}
