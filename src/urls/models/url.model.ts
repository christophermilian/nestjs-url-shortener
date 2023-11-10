import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface IUrl {
  short_url_id: string;
  longUrl: string;
}

export type UrlDocument = HydratedDocument<IUrl>;

@Schema()
export class Url {
  @Prop({ required: true })
  short_url_id: string;

  @Prop({ required: true })
  longUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
