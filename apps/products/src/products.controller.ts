import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';

@Controller()
export class ProductsController {
  constructor(private readonly nestjsAppService: ProductsService) {}

  @MessagePattern({ cmd: 'ping' })
  ping() {
    return of('pong').pipe(delay(1000));
  }
}
