export interface CreateShortUrlInput {
  longUrl: string;
  authKey?: string;
}

export type UrlResponse = { 
  longUrl?: string;
  shortUrl?: string;
}
