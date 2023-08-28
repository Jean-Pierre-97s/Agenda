import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
