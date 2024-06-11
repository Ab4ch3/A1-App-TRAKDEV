import { registerAs } from '@nestjs/config';

// PARCEAR LAS VARIABLES DE ENTORNO
export default registerAs('database', () => ({
  database_host: process.env.DATABASE_HOST,
  database_user: process.env.DATABASE_USER,
  database_password: process.env.DATABASE_PASSWORD,
}));
