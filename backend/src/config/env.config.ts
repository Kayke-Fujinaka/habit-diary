import 'dotenv/config';

import { IEnvProps } from '@interfaces/config';

const envSchema = (): IEnvProps => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 8080,
});

export const _env = envSchema();
