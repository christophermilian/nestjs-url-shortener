import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OriginalUrl } from './types/url.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from '../models/url.model';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  /**
   * Gets the full stored URL given the short id
   * @param input string
   * @returns A promise of an OriginalUrl: longUrl
   */
  async getLongUrl(input: string): Promise<OriginalUrl> {
    try {
      const result = await this.urlModel.findOne({ id_short: input });
      if (result == null) {
        throw new Error(`No record found for id ${input}`);
      }
      return {
        longUrl: result.longUrl,
      };
    } catch (err) {
      console.error(err);
      throw new HttpException(
        'A link was not found given the id.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Creates and saves a shortened url given the original url
   * @param input string
   * @returns A promise of a OriginalUrl: longUrl
   */
  async createShortUrl(input: string): Promise<OriginalUrl> {
    try {
      const specialId = this.createShortId();
      const result = await this.urlModel.create({
        shortSuffix: specialId,
        longUrl: input,
      });
      return {
        longUrl: result.longUrl,
      };
    } catch (err) {
      console.error(err);
      throw new HttpException(
        'The service could not create the shortened URL.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Generates a unique id used for the short url
   * @returns A randomized five character string
   */
  private createShortId() {
    let short = '';
    for (let i = 0; i < 5; i++) {
      // 97 - 122 lowercase letters in acsii
      const letterCode = Math.random() * (123 - 97) + 97;
      const bleh = String.fromCharCode(letterCode);
      short += bleh;
    }
    return short;
  }
}
