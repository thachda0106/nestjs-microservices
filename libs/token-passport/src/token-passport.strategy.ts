import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';

@Injectable()
export class TokenPassportStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({ username }) {
    const account = await this.prisma.account.findFirst({
      where: { username },
    });

    if (!account) {
      throw new UnauthorizedException();
    }

    return account;
  }
}
