import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ConfigOptions } from './constants';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigOptions),
    UsersModule,
    ProjectsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
