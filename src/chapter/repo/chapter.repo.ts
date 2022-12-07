import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chapter, ChapterDocument } from '../schemas/chapter.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChapterRepository {
    constructor(@InjectModel(Chapter.name) private chapterModel: Model<ChapterDocument>,) {}

    async create(chapter: Chapter) {
        const createdChapter = new this.chapterModel(chapter);
        return createdChapter.save();
    }

    async findAll(): Promise<Chapter[]> {
        return this.chapterModel.find().exec();
    }

    async findById(id: string): Promise<Chapter> {
        let chapter: Chapter = await Promise.resolve(this.chapterModel.findById(id).exec());
        return {
            title: chapter.title,
            description: chapter.description,
            content: chapter.content,
        };
    }

    async deleteById(id: string): Promise<Chapter> {
        return await Promise.resolve(this.chapterModel.findByIdAndDelete(id).exec());
    }

    async update(id: string, updateChapter: Chapter): Promise<void> {
        await this.chapterModel.updateOne(
            {
                _id: id,
            },
            updateChapter,
        )
        .exec();
    }
    
}