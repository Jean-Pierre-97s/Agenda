import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Set up the view engine
    app.useStaticAssets(path.join(process.cwd(), 'frontend', 'public')); // Assuming you have static assets in a 'public' folder
    app.setBaseViewsDir(path.join(process.cwd(), 'frontend', 'views'));
    app.setViewEngine('ejs'); // Use EJS as the view engine
    
  await app.listen(3000);
}
bootstrap();
