import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const configServices = new ConfigService();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configServices.get('DB_HOST'),
        port: configServices.get('DB_PORT'),
        username: configServices.get('DB_USER'),
        password: configServices.get('DB_PASSWORD'),
        database: configServices.get('DB_NAME'),
        entities: [__dirname + '/../**/**/*.entity{.ts.js}'],
        migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
        synchronize: false,
        migrationsRun: true,
        logging: false,
        namingStrategy: new SnakeNamingStrategy(),
        ssl: true,
      });

      return dataSource.initialize();
    },
  },
];
