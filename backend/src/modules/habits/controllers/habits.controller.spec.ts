import { Test, TestingModule } from '@nestjs/testing';

import { HabitsService } from '../services/habits.service';
import { HabitsController } from './habits.controller';

describe('HabitsController', () => {
  let controller: HabitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitsController],
      providers: [HabitsService],
    }).compile();

    controller = module.get<HabitsController>(HabitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
