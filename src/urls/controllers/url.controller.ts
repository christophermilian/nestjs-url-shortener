import { Controller, Post, Get, Body, HttpCode, Param, Res } from '@nestjs/common';
import { CreateShortUrlInput, UrlResponse } from './types/url.types';
import { UrlService } from '../services/url.service';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}
  /**
   * Retrieves the original url given the shortened url
   * @param input Object of unique_id: string, authKey?: string
   * @returns A promise of UrlResponse: id_short, long_id
   */
  @Get(':id')
  @HttpCode(308)
  async getLongUrl(
      @Param("id") input: string, @Res() res 
    ): Promise<UrlResponse> {
    const result = await this.urlService.getLongUrl(input);
    return res.redirect(result.longUrl)
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
      shortUrl: result.shortUrl,
    };
  }
}
