import { UserStatus } from '../../enums/user-status.enum';
import { Role } from '../../enums/role.enum';

export interface UserProps {
  name: string;
  age: number;
  email: string;
  passwordHash: string;
  role: Role[];
  status: UserStatus;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
