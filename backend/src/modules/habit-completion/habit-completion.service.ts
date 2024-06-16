import { Injectable } from '@nestjs/common';

import { CreateHabitCompletionDto } from './dto/create-habit-completion.dto';
import { UpdateHabitCompletionDto } from './dto/update-habit-completion.dto';

@Injectable()
export class HabitCompletionService {
  create(createHabitCompletionDto: CreateHabitCompletionDto) {
    return 'This action adds a new habitCompletion';
  }

  findAll() {
    return `This action returns all habitCompletion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitCompletion`;
  }

  update(id: number, updateHabitCompletionDto: UpdateHabitCompletionDto) {
    return `This action updates a #${id} habitCompletion`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitCompletion`;
  }
}
