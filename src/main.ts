import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Set up the view engine
    app.useStaticAssets(path.join(process.cwd(), 'frontend', 'public')); // Assuming you have static assets in a 'public' folder
    app.setBaseViewsDir(path.join(process.cwd(), 'frontend', 'views'));
    app.setViewEngine('ejs'); // Use EJS as the view engine
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    
    const config = new DocumentBuilder()
    .setTitle('Documentação - Project Agenda')
    .setDescription('Project Agenda')
    .setVersion('1.0')
    .addTag('Core')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);
    
  await app.listen(3000);
}
bootstrap();
