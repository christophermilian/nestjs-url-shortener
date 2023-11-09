export interface CreateShortUrlInput {
  longUrl: string;
  authKey?: string;
}

export interface GetFullUrlInput {
  shortUrl: string;
  authKey?: string;
}

export type UrlResponse = { 
  longUrl: string;
}
