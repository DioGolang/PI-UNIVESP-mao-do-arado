import { IsEmail, IsEnum, IsInt, IsString, Matches } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { Role } from '../../../domain/enums/role.enum';
import { UserStatus } from '../../../domain/enums/user-status.enum';

export class CreateUserDto {
  @Expose()
  @Type(() => String)
  id: string;

  @IsString()
  public readonly name: string;

  @IsEmail()
  public readonly email: string;

  @IsInt()
  public readonly age: number;

  @IsEnum(Role)
  public readonly role: string[];

  @IsEnum(UserStatus)
  public readonly status: string;

  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 8 characters, including letters and numbers',
  })
  public readonly passwordHash: string;
}
