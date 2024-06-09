import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string {
    return 'Hello Users!';
  }
}
