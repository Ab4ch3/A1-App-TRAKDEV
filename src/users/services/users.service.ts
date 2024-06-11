import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {
    console.log(this.configService.get('config.property1'));
    console.log(this.configService.get('config.property2'));
    console.log(this.configService.get('config.property3'));
  }

  findAll(): string {
    return 'Hello Users!';
  }
}
