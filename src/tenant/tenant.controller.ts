import { Controller, Get, HostParam } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Controller({ host: ':tenant.localhost' })
export class TenantController {
  constructor(private readonly service: PrismaService) {}

  @Get('/')
  async index(@HostParam('tenant') tenant: string) {
    const users = await this.service.user.findMany();

    return {
      [tenant]: users,
    };
  }

  @Get('/store')
  async store(@HostParam('tenant') tenant: string) {
    const user = await this.service.user.create({
      data: {
        email: 'edram@qq.com',
      },
    });

    return {
      [tenant]: user,
    };
  }
}
