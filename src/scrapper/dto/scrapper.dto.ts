import { ErrorDto } from './error.dto';
import { ObjectType, Field } from '@nestjs/graphql';
import { IError } from '../scrapper.interface';

@ObjectType()
export class ScrapperDto {
	@Field(type => String, { nullable: true })
	title: string;

	@Field(type => String, { nullable: true })
	description: string;

	@Field(type => String, { nullable: true })
	largestImage: string;

	@Field(type => [ErrorDto], { nullable: true })
	error: [IError];
}