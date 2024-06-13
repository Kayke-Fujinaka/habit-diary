import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { loggerConfig } from '@config/logger.config';
import { PostgresService } from '@config/postgres.config';
import { LoggerMiddleware } from '@middleware/logger.middleware';
import { HabitsModule } from '@modules/habits/habits.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresService,
      inject: [PostgresService],
    }),
    LoggerModule.forRoot(loggerConfig),
    HabitsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
