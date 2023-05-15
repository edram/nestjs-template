import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/database';
import { TestService } from 'src/shared/services/test.service';

@Controller()
export class Module1Controller {
  constructor(
    private readonly service: TestService,
    private readonly config: ConfigService,
  ) {}

  @Get('/module1')
  getHello(): string {
    const c1 = this.config.get<DatabaseConfig>('database');
    console.log(c1);
    return this.service.getHello();
  }
}
