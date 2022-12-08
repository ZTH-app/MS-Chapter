import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterController } from './chapter.controller';
import { Chapter, ChapterSchema } from './schemas/chapter.schema';
import { ChapterService } from './chapter.service';
import { ChapterRepository } from './repo/chapter.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }]),
  ],
  providers: [ChapterService, ChapterRepository],
  controllers: [ChapterController],
})
export class ChapterModule {}
