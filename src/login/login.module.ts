import { Module } from '@nestjs/common';
import { LoginService } from './service/login.service';
import { LoginController } from './infra/http/controller/login.controller';
import { Login } from './infra/typeorm/entities/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginRepository } from './infra/typeorm/repositories/LoginRepository';
import { ILoginRepository } from './repositories/ILoginRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [LoginController],
  providers: [LoginService,
    {
      provide: ILoginRepository,
      useClass: LoginRepository
    },
  ],
})
export class LoginModule {}
