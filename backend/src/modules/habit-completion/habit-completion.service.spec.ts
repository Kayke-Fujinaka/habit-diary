import { Test, TestingModule } from '@nestjs/testing';

import { HabitCompletionService } from './habit-completion.service';

describe('HabitCompletionService', () => {
  let service: HabitCompletionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitCompletionService],
    }).compile();

    service = module.get<HabitCompletionService>(HabitCompletionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
