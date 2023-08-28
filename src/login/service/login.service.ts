import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from '../dto/create-login.dto';
import { UpdateLoginDto } from '../dto/update-login.dto';
import { ILoginRepository } from '../repositories/ILoginRepository';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: ILoginRepository,
) { }

  async create(createLoginDto: CreateLoginDto) {
    const login = await this.loginRepository.createLogin(createLoginDto)
    return login;
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
