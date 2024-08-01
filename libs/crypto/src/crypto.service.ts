import { Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

@Injectable()
export class CryptoService {
  saltRounds = 10;

  hash(plaintext: string) {
    const salt = bcrypt.genSaltSync(this.saltRounds);
    return bcrypt.hashSync(plaintext, salt);
  }

  compare(plaintext: string, hash: string) {
    return bcrypt.compareSync(plaintext, hash);
  }
}
