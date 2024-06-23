import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private _userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this._userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this._userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this._userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this._userRepository.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this._userRepository.update(id, updateUserDto);
    return this._userRepository.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this._userRepository.softDelete(id);
  }
}
