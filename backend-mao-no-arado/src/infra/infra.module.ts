import { Module } from '@nestjs/common';
import { ConfigModule } from './persistence/config/config.module';
import { RepositoriesModule } from './persistence/database/postgres/repositories/repositories.module';

@Module({
  imports: [ConfigModule, RepositoriesModule],
})
export class InfraModule {}
