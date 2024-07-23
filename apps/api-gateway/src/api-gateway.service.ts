import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { SERVICES } from './configs/services';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject(SERVICES.Auth) private readonly authService: ClientProxy,
    @Inject(SERVICES.Products) private readonly productsService: ClientProxy,
  ) {}

  pingAuthService() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.authService
      .send<string>(pattern, payload)
      .pipe(map((data: any) => ({ data, duration: Date.now() - startTs })));
  }

  pingProductsService() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.productsService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs })),
      );
  }
}
