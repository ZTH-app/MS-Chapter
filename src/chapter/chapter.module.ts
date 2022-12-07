import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ChapterController } from "./chapter.controller";
import  { Chapter, ChapterSchema } from "./schemas/chapter.schema"
import { ChapterService } from "./chapter.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema}]),
    ],
    providers: [ChapterService],
    controllers: [ChapterController],
})

export class ChapterModule {}