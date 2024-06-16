import { Module } from '@nestjs/common';

import { HabitCompletionController } from './controllers/habit-completion.controller';
import { HabitCompletionService } from './services/habit-completion.service';

@Module({
  controllers: [HabitCompletionController],
  providers: [HabitCompletionService],
})
export class HabitCompletionModule {}
