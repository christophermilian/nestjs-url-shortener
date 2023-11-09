import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateShortUrlInput, GetFullUrlInput, UrlResponse } from './types/url.types';
import { UrlService } from '../services/url.service';

@Controller('urls')
export class UrlController {
  constructor(private urlService: UrlService) {}
  /**
   * Retrieves the original url given the shortened url
   * @param input Object of unique_id: string, authKey?: string
   * @returns A promise of UrlResponse: id_short, long_id
   */
  @Post('get-url')
  @HttpCode(308)
  async getLongUrl(
      @Body() input: GetFullUrlInput,
    ): Promise<UrlResponse> {
    const result = await this.urlService.getLongUrl(input.shortUrl);
    return {
      longUrl: result.longUrl,
    };
  }

  /**
   * Creates a new shortened url given the original url
   * @param input Object of longUrl: string, authKey?: string
   * @returns A promise of UrlResponse: id_short, long_id
   */
  @Post('create-url')
  async createShortUrl(
    @Body() input: CreateShortUrlInput,
  ): Promise<UrlResponse> {
    const result = await this.urlService.createShortUrl(input.longUrl);
    return {
      longUrl: result.longUrl,
    };
  }
}
