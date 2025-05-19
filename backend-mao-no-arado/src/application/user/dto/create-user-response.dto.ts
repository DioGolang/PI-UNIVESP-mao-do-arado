import { Exclude, Expose, Type } from 'class-transformer';

@Expose()
export class CreateUserResponseDto {
  @Expose()
  @Type(() => String)
  id: string;

  @Expose()
  @Type(() => String)
  name: string;

  @Expose()
  @Type(() => Boolean)
  status: boolean;

  @Expose()
  @Type(() => String)
  email: string;

  @Exclude()
  passwordHash: string;

  @Expose()
  @Type(() => Date)
  createdAt: Date;

  @Expose()
  @Type(() => Date)
  updatedAt: Date;
}
