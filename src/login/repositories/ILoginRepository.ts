import { CreateLoginDto } from "../dto/create-login.dto";
import { Login } from "../infra/typeorm/entities/login.entity";

export abstract class ILoginRepository {
    abstract createLogin(account: CreateLoginDto): Promise<Login>;
}