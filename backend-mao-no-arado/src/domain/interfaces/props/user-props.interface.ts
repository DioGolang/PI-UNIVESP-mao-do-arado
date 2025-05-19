import { UserStatus } from '../../enums/user-status.enum';
import { Role } from '../../enums/role.enum';
import { Email } from '../../value-objects/email.vo';

export interface UserProps {
  name: string;
  age: number;
  email: Email;
  passwordHash: string;
  role: Role[];
  status: UserStatus;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
