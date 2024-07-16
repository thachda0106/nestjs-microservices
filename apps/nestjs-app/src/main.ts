import { NestFactory } from '@nestjs/core';
import { NestjsAppModule } from './nestjs-app.module';

async function bootstrap() {
  const app = await NestFactory.create(NestjsAppModule);
  await app.listen(3000);
}
bootstrap();
