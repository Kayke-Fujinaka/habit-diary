import { Module } from '@nestjs/common';

import { HabitsController } from './habits.controller';
import { HabitsService } from './services/habits.service';

@Module({
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}
