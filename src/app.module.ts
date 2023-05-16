import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { Modul1 } from './module1/module1.module';
import { Module2 } from './module2/module2.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [CoreModule, Modul1, Module2, TenantModule],
})
export class AppModule {}
