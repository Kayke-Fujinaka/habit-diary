import { Habit } from '@modules/habits/entities/habit.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class HabitCompletion {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'date', type: 'date', nullable: false })
  date: Date;

  @Column({
    name: 'is_completed',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  isCompleted: boolean;

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

  @VersionColumn({ name: 'version', nullable: false, default: 1 })
  version?: number;

  @ManyToOne(() => Habit, (habit) => habit.completions)
  habit: Habit;
}
