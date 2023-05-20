import { registerAs } from '@nestjs/config';

export type DatabaseConfig = {
  host?: string;
};

export default registerAs<DatabaseConfig>('database', () => ({
  host: process.env.DATABASE_HOST,
}));
