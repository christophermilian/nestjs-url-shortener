//TODO: Fix controller level tests
/* import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from '../services/url.service';
import { UrlController } from './url.controller';

describe('UrlController', () => {
  let urlController: UrlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [UrlService],
    }).compile();

    urlController = app.get<UrlController>(UrlController);
  });

  describe("Controller function tests", () => {
    it("It should return a short link id and the full link.", () => {
      expect(urlController.createShortUrl({ longUrl: "https://www.linkedin.com/in/christophermilian/"})).toMatchObject(
        {
          id_short: "",
          longUrl: "https://www.linkedin.com/in/christophermilian/"
        })
    });
  });
}); */
