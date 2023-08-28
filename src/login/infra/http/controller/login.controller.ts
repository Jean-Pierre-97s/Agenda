import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { LoginService } from '../../../service/login.service';
import { CreateLoginDto } from '../../../dto/create-login.dto';
import { UpdateLoginDto } from '../../../dto/update-login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiTags('Login')
  @Post('/register')
  create(@Body() createLoginDto: CreateLoginDto) {
    console.log(createLoginDto)
    return this.loginService.create(createLoginDto);
  }

  @ApiTags('Login')
  @Get()
  @Render('login')
  getLoginIndex() {
    return { message: this.loginService.findAll() };;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
