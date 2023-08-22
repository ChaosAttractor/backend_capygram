import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ErrorOrVoid } from '../../types/errorOrVoid.type';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto): Promise<ErrorOrVoid<UserInterface>> {
    return this.userService.create(dto);
  }
}
