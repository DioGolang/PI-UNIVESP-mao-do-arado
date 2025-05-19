import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [InfraModule, DomainModule, ApplicationModule, PresentationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
