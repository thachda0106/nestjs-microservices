import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { CORS_OPTIONS } from './configs/cors';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HELMET_OPTIONS } from './configs/helmet';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger = new Logger();

(async () => {
  const app = await NestFactory.create(ApiGatewayModule);

  // API GATEWAY CONFIG
  app.enableCors(CORS_OPTIONS);
  app.use(helmet(HELMET_OPTIONS));
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');

  // SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('E-commerce API')
    .setDescription('The E-commerce API document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);

  await app.listen(process.env.API_GATEWAY_PORT);
  logger.log(
    `Api gateway running on http://localhost:${process.env.API_GATEWAY_PORT}`,
  );
})();
