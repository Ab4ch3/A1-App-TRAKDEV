import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);

  //Cors
  app.enableCors(CORS);

  // Prefijo global
  app.setGlobalPrefix('v1');

  await app.listen(configService.get('PORT'));
  console.log(`App running on: ${await app.getUrl()}`);
}
bootstrap();
