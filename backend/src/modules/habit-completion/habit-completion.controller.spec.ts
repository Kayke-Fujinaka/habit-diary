import { Test, TestingModule } from '@nestjs/testing';

import { HabitCompletionController } from './habit-completion.controller';
import { HabitCompletionService } from './habit-completion.service';

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
