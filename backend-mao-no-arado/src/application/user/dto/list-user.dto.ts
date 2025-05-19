import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ListUserDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  name?: string;

  @IsOptional()
  @IsEmail()
  @Type(() => String)
  email?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  status?: boolean;

  @IsOptional()
  @IsInt({ message: 'page must be an integer number' })
  @IsPositive({ message: 'page must be a positive number' })
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsInt({ message: 'limit must be an integer number' })
  @IsPositive({ message: 'limit must be a positive number' })
  @Type(() => Number)
  limit?: number = 10;
}
