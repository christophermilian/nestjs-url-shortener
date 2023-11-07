import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateShortUrlInput, UrlResponse } from './types/url.types';
import { UrlService } from '../services/url.service';

@Controller('urls')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get('get-url/:id')
  async getFullUrl(@Param('id') id: string): Promise<UrlResponse> {
    const result = await this.urlService.getFullUrl(id);
    return {
      id_short: result.id_short,
      longUrl: result.longUrl,
    };
  }

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
