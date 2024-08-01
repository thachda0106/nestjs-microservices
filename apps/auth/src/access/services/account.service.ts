import { PrismaService } from '@libs/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async getAccountInfo(username: string) {
    return await this.prisma.account.findFirst({
      where: { username, enable: 1 },
      select: {
        username: true,
        password: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getCustomerInfo(username: string) {
    return await this.prisma.customer.findFirst({ where: { username } });
  }

  async getEmployeeInfo(username: string) {
    return await this.prisma.employee.findFirst({ where: { username } });
  }
}
