import { IUser } from 'src/interfaces/user.interface';
import { Column, Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;
}
