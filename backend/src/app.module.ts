import { Module } from '@nestjs/common';

import { HabitsModule } from './habits/habits.module';

@Module({
  imports: [HabitsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
