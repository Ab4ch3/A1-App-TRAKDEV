import { registerAs } from '@nestjs/config';

// PARCEAR LAS VARIABLES DE ENTORNO
export default registerAs('Config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000, //parceo
  env: process.env.ENV,
}));
