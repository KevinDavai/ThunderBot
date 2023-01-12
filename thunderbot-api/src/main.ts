import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import MongoStore from 'connect-mongo/build/main/lib/MongoStore';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(process.env.API_PORT);
    console.log(`Running on PORTS ${process.env.API_PORT}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
