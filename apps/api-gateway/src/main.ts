import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { CORS_OPTIONS } from './configs/cors';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { HELMET_OPTIONS } from './configs/helmet';

const logger = new Logger();

(async () => {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors(CORS_OPTIONS);
  app.use(helmet(HELMET_OPTIONS));

  await app.listen(3000);
  logger.log('Api gateway running on http://localhost:3000');
})();
