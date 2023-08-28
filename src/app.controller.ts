import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello() {
    return { message: "Hello World" }; // Pass data to the view
  }
}
