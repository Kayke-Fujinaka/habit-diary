import { NestFactory } from '@nestjs/core';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

import { _env } from '@config/env.config';
import { SwaggerConfig, swaggerUrl } from '@config/swagger.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = app.get(Logger);

  app.useLogger(logger);
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  app.enableCors();

  SwaggerConfig.setup(app);

  const port = _env.port;
  await app.listen(port, () => {
    logger.log(`listening on port: http://localhost:${port}`);
    logger.log(`open api docs: http://localhost:${port}/${swaggerUrl}`);
  });
}
bootstrap();
