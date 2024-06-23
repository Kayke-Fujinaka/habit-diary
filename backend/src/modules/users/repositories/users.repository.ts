import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  async findById(id: string) {
    return this.createQueryBuilder('users')
      .where('users.id = :id', { id })
      .getOne();
  }

  async findByEmail(email: string) {
    return this.createQueryBuilder('users')
      .where('users.email = :email', { email })
      .getOne();
  }
}
