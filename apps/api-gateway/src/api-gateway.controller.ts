import { Controller, Get, Req } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get('/ping-auth')
  pingAuthService(@Req() req: any) {
    console.log(req.user);
    return this.apiGatewayService.pingAuthService();
  }

  @Get('/ping-products')
  pingProductsService() {
    return this.apiGatewayService.pingProductsService();
  }
}
