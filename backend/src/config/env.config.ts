import 'dotenv/config';

import { IEnvProps } from '@interfaces/config';

const envSchema = (): IEnvProps => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 8080,
  databaseHost: process.env.DATABASE_HOST,
  databasePort: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
});

export const _env = envSchema();
