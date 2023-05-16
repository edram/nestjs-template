import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { PrismaModule } from 'nestjs-prisma';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Module({
  imports: [
    PrismaModule.forRootAsync({
      useFactory: async (req: Request) => {
        const tenant = req.hostname.replace('.localhost', '');

        return {
          prismaOptions: {
            log: ['info', 'query'],
            datasources: {
              db: {
                url: `file:./${tenant}.db`,
              },
            },
          },
        };
      },
      inject: [REQUEST],
    }),
  ],
  controllers: [TenantController],
})
export class TenantModule {}
