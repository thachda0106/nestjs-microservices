import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { CORS_OPTIONS } from './configs/cors';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HELMET_OPTIONS } from './configs/helmet';
import * as compression from 'compression';

const logger = new Logger();

(async () => {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors(CORS_OPTIONS);
  app.use(helmet(HELMET_OPTIONS));
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.API_GATEWAY_PORT);
  logger.log(
    `Api gateway running on http://localhost:${process.env.API_GATEWAY_PORT}`,
  );
})();
