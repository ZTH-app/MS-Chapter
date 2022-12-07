import { Controller, Get, Post, Body, Param, Delete, Patch } from "@nestjs/common";
import { Chapter } from './schemas/chapter.schema';
import { ChapterService } from "./chapter.service";

@Controller("chapter")
export class ChapterController {
    constructor(private readonly chapterService: ChapterService) {}
    @Post()
    create(@Body() createChapter: Chapter) {
        return this.chapterService.create(createChapter);
    }

    @Get()
    async findAll(): Promise<Chapter[]> {
        try {
            const entities: Chapter[] = await this.chapterService.findAll();
            return Promise.resolve(entities);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    
    @Get(':id')
    findById(@Param('id') id) {
        return this.chapterService.findById(id);
    }

    @Delete(':id')
    deleteById(@Param('id') id) {
        return this.chapterService.deleteById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() chapter: Chapter) {
        return this.chapterService.update(id, chapter)
    }

}