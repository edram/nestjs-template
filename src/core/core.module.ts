import { Global, Module } from '@nestjs/common';
import { TestService } from 'src/shared/services/test.service';

@Global()
@Module({
  providers: [TestService],
  exports: [TestService],
})
export class CoreModule {}
