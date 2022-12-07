import { Controller, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ChapterRepository } from "./repo/chapter.repo";
import { Chapter, ChapterDocument } from "./schemas/chapter.schema";

@Injectable()
export class ChapterService {
    constructor(private chapterRepositry: ChapterRepository) {}

    async create(chapter: Chapter): Promise<Chapter> {
        return await this.chapterRepositry.create(chapter);
    }

    async findAll(): Promise<Chapter[]> {
        return this.chapterRepositry.findAll();
    }

    async findById(id: string): Promise<Chapter> {
        let chapter: Chapter = await this.chapterRepositry.findById(id);
        return {
            title: chapter.title,
            description: chapter.description,
            content: chapter.content,
        };
    }

    async deleteById(id: string): Promise<Chapter> {
        return await this.chapterRepositry.deleteById(id);
    }

    async update(id: string, updateChapter: Chapter): Promise<string> {
        // await this.chapterModel.updateOne(
        //     {
        //         _id: id,
        //     },
        //     updateChapter,
        // )
        // .exec();
        await this.chapterRepositry.update(id, updateChapter);
        return "Chapitre modfifié"
    }
}
