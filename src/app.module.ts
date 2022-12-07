import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterModule } from './chapter/chapter.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'nest.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ChapterModule
],
  
})
export class AppModule {}
