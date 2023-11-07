import { Module } from '@nestjs/common';
import { UrlModule } from './urls/url.module';

@Module({
  imports: [UrlModule],
})
export class AppModule {}
