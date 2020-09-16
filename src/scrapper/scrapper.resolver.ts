import { ScrapperService } from './scrapper.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ScrapperDto } from './dto/scrapper.dto';

@Resolver()
export class ScrapperResolver {

	constructor(
		private readonly scrapperService: ScrapperService
	) {

	}


	@Query(() => ScrapperDto)
	async parseUrl(
		@Args({ name: 'url', type: () => String, nullable: false }) url: string,
	) {
		return await this.scrapperService.scrap(url)
	}
}
