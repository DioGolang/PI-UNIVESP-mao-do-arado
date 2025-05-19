import { Entity } from 'typeorm/decorator/entity/Entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserStatus } from '../../../../../domain/enums/user-status.enum';
import { Role } from '../../../../../domain/enums/role.enum';

@Entity('User')
export class UserSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  // @Column(type: 'enum', { enum: Role })
  @Column({ type: 'simple-array', enum: Role })
  role: Role[];

  @Column({ type: 'enum', enum: UserStatus })
  status: UserStatus;

  @Column()
  passwordHash: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleteAt: Date;
}
