import { NestFactory } from '@nestjs/core';

import { _env } from '@config/env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(_env.port);
}
bootstrap();
