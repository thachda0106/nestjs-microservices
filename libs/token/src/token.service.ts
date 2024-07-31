import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async createAccessToken(payload) {
    return await this.jwtService.signAsync(payload);
  }

  async createRefreshToken(payload) {
    return await this.jwtService.signAsync(payload);
  }
}
