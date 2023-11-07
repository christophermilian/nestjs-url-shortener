import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from 'src/urls/controllers/url.controller';
import { UrlService } from 'src/urls/services/url.service';
import { Url, UrlSchema } from './models/url.model';
import { MONGODB_CONNECTION_STRING } from 'environment';

// Mongo Connection String Format: "mongodb://<user>:<password>@127.0.0.1:27017/<collections_name>""
@Module({
  controllers: [UrlController],
  providers: [UrlService],
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION_STRING),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
  ],
})
export class UrlModule {}
