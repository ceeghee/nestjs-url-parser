import { Module } from '@nestjs/common';
import { ScrapperResolver } from './scrapper.resolver';
import { ScrapperService } from './scrapper.service';

@Module({

  providers: [ScrapperResolver, ScrapperService]
})
export class ScrapperModule { }
