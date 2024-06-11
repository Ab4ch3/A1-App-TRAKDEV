import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configApp from './config/config-app';
import configDatabase from './config/config-database';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [configApp, configDatabase],
      isGlobal: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
