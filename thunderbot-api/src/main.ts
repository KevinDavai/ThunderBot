import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
    }),
  );

  try {
    await app.listen(process.env.API_PORT);
    console.log(`Running on PORTS ${process.env.API_PORT}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
