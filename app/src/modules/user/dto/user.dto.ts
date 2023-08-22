import { UserInterface } from '../interfaces/user.interface';

export class CreateUserDto implements UserInterface {
  nickname: string;
  password: string;
  email?: string;
}
