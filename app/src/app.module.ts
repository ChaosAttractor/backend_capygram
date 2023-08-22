import {Module} from '@nestjs/common';
import {PrismaModule} from './config/prisma/prisma.module';
import {PostModule} from "./modules/posts/post.module";

@Module({
  imports: [PrismaModule, PostModule],
})
export class AppModule {
}
