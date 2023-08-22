import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { ErrorOrVoid } from '../../types/errorOrVoid.type';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateUserDto): Promise<ErrorOrVoid<UserInterface>> {
    try {
      await this.prisma.person.create({
        data: {
          nickname: dto.nickname,
          password: dto.password,
          email: dto.password || '',
        },
      });
    } catch (e) {
      return {
        message: 'Ошибка валидации',
        data: {
          ...dto,
        },
      };
    }
  }
}
