import { Module } from '@nestjs/common';
import { LoginService } from './service/login.service';
import { LoginController } from './infra/http/controller/login.controller';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
