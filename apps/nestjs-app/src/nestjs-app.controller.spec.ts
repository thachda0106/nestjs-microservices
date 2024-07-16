import { Test, TestingModule } from '@nestjs/testing';
import { NestjsAppController } from './nestjs-app.controller';
import { NestjsAppService } from './nestjs-app.service';

describe('NestjsAppController', () => {
  let nestjsAppController: NestjsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestjsAppController],
      providers: [NestjsAppService],
    }).compile();

    nestjsAppController = app.get<NestjsAppController>(NestjsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestjsAppController.getHello()).toBe('Hello World!');
    });
  });
});
