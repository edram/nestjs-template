import { Module } from '@nestjs/common';
import { Module2Controller } from './module2.controller';

@Module({
  controllers: [Module2Controller],
})
export class Module2 {}
