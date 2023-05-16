import { Module } from '@nestjs/common';
import { Module1Controller } from './module1.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [Module1Controller],
})
export class Modul1 {}
