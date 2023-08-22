import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { Chat } from '@prisma/client';
import { ErrorOrVoid } from '../../types/errorOrVoid.type';
import { ChatInterface } from './interfaces/chat.interface';
import { CreateChatDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Chat[]> {
    return this.prisma.chat.findMany();
  }

  async getAllInChat(chatId: string): Promise<Chat[]> {
    return this.prisma.chat.findMany({ where: { chatId } });
  }

  async create(dto: CreateChatDto): Promise<ErrorOrVoid<ChatInterface>> {
    try {
      await this.prisma.chat.create({
        data: {
          ...dto,
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
