export interface CreateShortUrlInput {
  longUrl: string;
}

export interface UrlResponse {
  id_short: string;
  longUrl?: string;
}
