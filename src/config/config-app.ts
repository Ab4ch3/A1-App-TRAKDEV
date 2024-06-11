import { registerAs } from '@nestjs/config';

// PARCEAR LAS VARIABLES DE ENTORNO
export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000, //parceo
  property1: process.env.PROPERTY_1,
  property2: parseInt(process.env.PROPERTY_2, 10),
  property3: process.env.PROPERTY_3 == 'true',
}));
