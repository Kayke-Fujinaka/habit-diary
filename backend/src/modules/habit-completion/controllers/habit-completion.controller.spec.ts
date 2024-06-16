import { Test, TestingModule } from '@nestjs/testing';

import { HabitCompletionService } from '../services/habit-completion.service';
import { HabitCompletionController } from './habit-completion.controller';

describe('HabitCompletionController', () => {
  let controller: HabitCompletionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitCompletionController],
      providers: [HabitCompletionService],
    }).compile();

    controller = module.get<HabitCompletionController>(
      HabitCompletionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
