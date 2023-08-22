import { ChatService } from './chat.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Chat } from '@prisma/client';
import { CreateChatDto } from './dto/chat.dto';
import { ChatInterface } from './interfaces/chat.interface';
import { ErrorOrVoid } from '../../types/errorOrVoid.type';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getAll(): Promise<Chat[]> {
    return this.chatService.getAll();
  }

  @Get(':chatId')
  async getAllInChat(@Param('chatId') chatId: string): Promise<Chat[]> {
    return this.chatService.getAllInChat(chatId);
  }

  @Post()
  async create(
    @Body() dto: CreateChatDto,
  ): Promise<ErrorOrVoid<ChatInterface>> {
    return this.chatService.create(dto);
  }
}
