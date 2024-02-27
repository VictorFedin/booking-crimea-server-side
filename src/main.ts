import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  ValidationPipe,
  VERSION_NEUTRAL,
  VersioningType,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    abortOnError: false,
    forceCloseConnections: true,
  });

  app.enableShutdownHooks();

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  const config = app.get(ConfigService);

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  app.enableCors(corsOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  const swaggerOptions = new DocumentBuilder()
    .setTitle(config.get<string>('SWAGGER_TITLE'))
    .setDescription(config.get<string>('SWAGGER_DESCRIPTION'))
    .setVersion(config.get<string>('SWAGGER_VERSION'))
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(config.get<string>('SWAGGER_DIRECTORY'), app, document);

  await app.listen(config.get<number>('SERVER_PORT'));
}

bootstrap();
