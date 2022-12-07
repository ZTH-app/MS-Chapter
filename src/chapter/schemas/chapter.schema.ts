import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>

@Schema()
export class Chapter {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    content: string;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);