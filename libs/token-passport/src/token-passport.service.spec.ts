import { Test, TestingModule } from '@nestjs/testing';
import { TokenPassportService } from './token-passport.service';

describe('TokenPassportService', () => {
  let service: TokenPassportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenPassportService],
    }).compile();

    service = module.get<TokenPassportService>(TokenPassportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
