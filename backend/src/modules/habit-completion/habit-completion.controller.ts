import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateHabitCompletionDto } from './dto/create-habit-completion.dto';
import { UpdateHabitCompletionDto } from './dto/update-habit-completion.dto';
import { HabitCompletionService } from './habit-completion.service';

@Controller('habit-completion')
export class HabitCompletionController {
  constructor(
    private readonly habitCompletionService: HabitCompletionService,
  ) {}

  @Post()
  create(@Body() createHabitCompletionDto: CreateHabitCompletionDto) {
    return this.habitCompletionService.create(createHabitCompletionDto);
  }

  @Get()
  findAll() {
    return this.habitCompletionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitCompletionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitCompletionDto: UpdateHabitCompletionDto,
  ) {
    return this.habitCompletionService.update(+id, updateHabitCompletionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitCompletionService.remove(+id);
  }
}
