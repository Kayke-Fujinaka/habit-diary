import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { _env } from './env.config';

@Injectable()
export class PostgresConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: _env.databaseHost,
      port: _env.databasePort,
      username: _env.databaseUsername,
      password: _env.databasePassword,
      database: 'habit',
      entities: [],
      synchronize: true,
      migrationsRun: true,
      autoLoadEntities: true,
    };
  }
}
