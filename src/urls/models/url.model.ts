import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface IUrl {
  url_code: string;
  short_url: string;
  long_url: string;
}

export type UrlDocument = HydratedDocument<IUrl>;

@Schema()
export class Url {
  @Prop({ required: true })
  url_code: string;

  @Prop({ required: true })
  short_url: string;

  @Prop({ required: true })
  long_url: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
