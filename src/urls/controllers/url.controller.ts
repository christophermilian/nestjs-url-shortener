import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateShortUrlInput, UrlResponse } from './types/url.types';
import { UrlService } from '../services/url.service';

@Controller('urls')
export class UrlController {
  constructor(private urlService: UrlService) {}
  /**
   * TODO: Redirect with 306 to stored link
   * 
   * Retrieves the original url given the shortened url
   * @param id Object with the unique id
   * @returns A promise of UrlResponse: id_short, long_id
   */
  @Get('get-url/:id')
  async getFullUrl(@Param('id') id: string): Promise<UrlResponse> {
    const result = await this.urlService.getFullUrl(id);
    return {
      id_short: result.id_short,
      longUrl: result.longUrl,
    };
  }

  /**
   * Creates a new shortened url given the original url
   * @param input 
   * @returns A promise of UrlResponse: id_short, long_id
   */
  @Post('create-url')
  async createShortUrl(
    @Body() input: CreateShortUrlInput,
  ): Promise<UrlResponse> {
    const result = await this.urlService.createShortUrl(input.longUrl);
    return {
      id_short: result.id_short,
      longUrl: result.longUrl,
    };
  }
}
