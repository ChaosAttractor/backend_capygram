import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../config/prisma/prisma.service";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {
  }
}
