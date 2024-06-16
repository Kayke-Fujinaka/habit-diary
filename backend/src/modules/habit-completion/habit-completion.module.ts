import { Module } from '@nestjs/common';

import { HabitCompletionController } from './habit-completion.controller';
import { HabitCompletionService } from './habit-completion.service';

@Module({
  controllers: [HabitCompletionController],
  providers: [HabitCompletionService],
})
export class HabitCompletionModule {}
