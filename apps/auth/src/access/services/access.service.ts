import { TokenService } from '@libs/token';
import { LoginAccountRequestDto } from '@libs/domain/modules/auth/dto/login-account.dto';
import { CryptoService } from '@libs/crypto';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { Roles } from '@libs/domain/modules/auth/entities/roles';
const _ = require('lodash');

@Injectable()
export class AccessService {
  constructor(
    private readonly crypto: CryptoService,
    private readonly token: TokenService,
    private readonly accountService: AccountService,
  ) {}

  async login({ username, password }: LoginAccountRequestDto) {
    const account = await this.accountService.getAccountInfo(username);

    if (!account || !this.crypto.compare(password, account.password)) {
      throw new RpcException('Invalid credentials.');
    }

    const userInfo = await (account.role.name === Roles.Customer
      ? this.accountService.getCustomerInfo(username)
      : this.accountService.getEmployeeInfo(username));

    const accountInfo = _.omit(account, ['password']);

    const [accessToken, refreshToken] =
      await this.token.createTokens(accountInfo);

    return {
      accessToken,
      refreshToken,
      ...userInfo,
    };
  }
}
