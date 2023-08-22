import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { ChatModule } from './modules/chat/chat.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PrismaModule, ChatModule, UserModule],
})
export class AppModule {}
