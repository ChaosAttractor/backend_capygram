import { ChatInterface } from '../interfaces/chat.interface';

export class CreateChatDto implements ChatInterface {
  userId: string;
}
