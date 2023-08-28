import { ILoginRepository } from "src/login/repositories/ILoginRepository";
import { Repository } from "typeorm";
import { Login } from "../entities/login.entity";
import { CreateLoginDto } from "src/login/dto/create-login.dto";
import { InjectRepository } from "@nestjs/typeorm";



export class LoginRepository implements ILoginRepository {
    constructor(
        @InjectRepository(Login)
        private readonly loginRepository: Repository<Login>,
    ) { }

    async createLogin(login: CreateLoginDto): Promise<Login> {
        const loginEntity = this.loginRepository.create(login);
        const output = await this.loginRepository.save(loginEntity);
        return output;
    }

}
