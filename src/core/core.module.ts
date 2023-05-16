import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import database from 'src/config/database';
import { PrismaService } from 'src/shared/services/prisma.service';
import { TestService } from 'src/shared/services/test.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ load: [database] })],
  providers: [TestService],
  exports: [TestService, ConfigModule],
})
export class CoreModule {}
