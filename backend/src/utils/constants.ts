import { _env } from '@config/env.config';

export const isDevelopment = _env.environment !== 'PRODUCTION';
