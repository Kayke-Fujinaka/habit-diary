import { Params } from 'nestjs-pino';

import { isDevelopment } from '@utils/constants';

export const loggerConfig: Params = {
  pinoHttp: {
    customProps: () => ({
      context: 'HTTP',
    }),
    transport: isDevelopment
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        }
      : undefined,
  },
};
