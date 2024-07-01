import configApp from '../config/config.app';

export const ConfigOptions: any = {
  envFilePath: `.${process.env.NODE_ENV}.env`,
  load: [configApp],
  isGlobal: true,
};
