import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from '../../entities/user.schema';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/application/user/dto/update-user.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../../../../domain/interfaces/repositories/userRepository.interface';
import { ListUserDto } from 'src/application/user/dto/list-user.dto';
import { UserStatus } from '../../../../../../domain/enums/user-status.enum';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserSchema)
    private readonly userSchema: Repository<UserSchema>,
  ) {}

  async create(userSchema: UserSchema): Promise<UserSchema> {
    return await this.userSchema.save(userSchema);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserSchema> {
    const user = await this.userSchema.findOne({
      where: { id: id, status: UserStatus.ACTIVE },
    });

    if (!user) {
      throw new NotFoundException('User status inactive');
    }

    if (dto.name) user.name = dto.name;
    if (dto.email) user.email = dto.email;
    if (dto.passwordHash) user.passwordHash = dto.passwordHash;
    return await this.userSchema.save(user);
  }
  delete() {
    throw new Error('Method not implemented.');
  }
  async list(filter: ListUserDto = {}): Promise<UserSchema[]> {
    const query = this.userSchema.createQueryBuilder('user');

    if (filter.name) {
      query.andWhere('user.name LIKE :name', { name: `%${filter.name}%` });
    }
    if (filter.email) {
      query.andWhere('user.email LIKE :email', { email: `%${filter.email}%` });
    }
    if (filter.status !== undefined) {
      query.andWhere('user.status = :status', { status: filter.status });
    }

    const [users] = await query
      .take(filter.limit)
      .skip((filter.page - 1) * filter.limit)
      .getManyAndCount();
    return users;
  }
  async findId(id: string): Promise<UserSchema> {
    const user = await this.userSchema.findOne({
      where: { id: id },
    });
    console.log(user);
    return user;
  }

  async disable(id: string): Promise<UserSchema> {
    const user = await this.userSchema.findOne({
      where: { id: id },
    });

    if (user.status === UserStatus.INACTIVE) {
      throw new BadRequestException('User already inactive');
    }
    user.status = UserStatus.INACTIVE;
    return this.userSchema.save(user);
  }

  async enable(id: string): Promise<UserSchema> {
    const user = await this.userSchema.findOne({
      where: { id: id },
    });

    if (user.status === UserStatus.ACTIVE) {
      throw new BadRequestException('User already active');
    }
    user.status = UserStatus.ACTIVE;
    return this.userSchema.save(user);
  }

  async userExists(email: string): Promise<UserSchema> {
    const user = await this.userSchema.findOne({
      where: { email: email, status: UserStatus.ACTIVE },
    });
    console.log(user);
    return user;
  }
}
