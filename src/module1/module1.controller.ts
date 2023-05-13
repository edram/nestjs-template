import { Controller, Get } from '@nestjs/common';
import { TestService } from 'src/shared/services/test.service';

@Controller()
export class Module1Controller {
  constructor(private readonly service: TestService) {}

  @Get('/module1')
  getHello(): string {
    return this.service.getHello();
  }
}
