import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const swaggerUrl = 'api/docs';

export class SwaggerConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Habit Tracker')
      .setDescription('Habit Tracker API Documentação')
      .setVersion('1.0')
      .addBearerAuth()
      .addApiKey(
        { type: 'apiKey', in: 'header' },
        'RefreshAvailableValueStrategy',
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'PeerBR API - Documentation',
    };

    SwaggerModule.setup('api/docs', app, { ...document }, customOptions);
  }
}
