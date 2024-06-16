import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

import { User } from '@modules/users/entities/user.entity';
import { HabitCompletion } from '@modules/habit-completion/entities/habit-completion.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
    nullable: true,
  })
  updatedAt?: Date | null;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp with time zone',
    nullable: true,
  })
  deletedAt?: Date | null;

  @VersionColumn({ name: 'version', nullable: false, default: 1 })
  version?: number;

  @ManyToOne(() => User, (user) => user.habits)
  user: User;

  @OneToMany(() => HabitCompletion, (completion) => completion.habit)
  completions: HabitCompletion[];
}
