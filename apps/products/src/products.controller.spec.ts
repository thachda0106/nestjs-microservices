import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('NestjsAppController', () => {
  let nestjsAppController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    nestjsAppController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestjsAppController.getHello()).toBe('Hello World!');
    });
  });
});
