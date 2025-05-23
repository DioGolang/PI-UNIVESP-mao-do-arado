import { Repository } from './repository.interface';
import { CreateUserDto } from '../../../application/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/application/user/dto/update-user.dto';
import { ListUserDto } from '../../../application/user/dto/list-user.dto';
import { UserSchema } from '../../../infra/persistence/database/postgres/entities/user.schema';

export interface UserRepository
  extends Repository<CreateUserDto, UserSchema, UpdateUserDto> {
  userExists(email: string): Promise<UserSchema>;
  disable(id: string): Promise<UserSchema>;
  list(dto: ListUserDto): Promise<UserSchema[]>;
  enable(id: string): Promise<UserSchema>;
}
