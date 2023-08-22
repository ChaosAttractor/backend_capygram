import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [PrismaModule, ChatModule],
})
export class AppModule {}
