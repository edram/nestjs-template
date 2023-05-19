import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      enableDebugMessages: true,
    }),
  );
  await app.listen(3000, async () => {
    const appServer = await app.getUrl();
    Logger.log(`App is running on:${appServer}`, `demo`);
  });
}
bootstrap();
