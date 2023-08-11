import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useStaticAssets(join(__dirname, '..', '/src/assets'), {
    prefix: '/api/assets',
  });

  const port = process.env.PORT || 8080;

  await app.listen(port);
};
bootstrap();
