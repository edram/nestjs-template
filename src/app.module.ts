import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { Modul1 } from './module1/module1.module';
import { Module2 } from './module2/module2.module';

@Module({
  imports: [CoreModule, Modul1, Module2],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
