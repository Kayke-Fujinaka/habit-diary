import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { loggerConfig } from '@config/logger.config';
import { PostgresConfig } from '@config/postgres.config';
import { LoggerMiddleware } from '@middleware/logger.middleware';
import { HabitsModule } from '@modules/habits/habits.module';
import { UsersModule } from '@modules/users/users.module';
import { HabitCompletionModule } from './habit-completion/habit-completion.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfig,
      inject: [PostgresConfig],
    }),
    LoggerModule.forRoot(loggerConfig),
    HabitsModule,
    UsersModule,
    HabitCompletionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
