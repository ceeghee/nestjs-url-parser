// import { IScrapper } from './scrapper.interface';
// import { ScrapperService } from './scrapper.service';
// import DataLoader = require("dataloader");
// import { Injectable } from "@nestjs/common";
// import { NestDataLoader } from "nestjs-dataloader";
// import { ScrapperDto } from './dto/scrapper.dto';

// @Injectable()
// export class UrlLoader implements NestDataLoader<string, ScrapperDto> {
//   constructor(private readonly scrapperService: ScrapperService) {}

//   generateDataLoader(): DataLoader<string, ScrapperDto> {
//     return new DataLoader<string, ScrapperDto>(keys =>
//       this.scrapperService.scrap(keys)
//     );
//   }
// }