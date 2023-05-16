import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':tenant.localhost' })
export class TenantController {
  @Get('/')
  index(@HostParam('tenant') tenant: string) {
    return tenant;
  }
}
