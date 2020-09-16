import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			introspection: true,
			playground: true,
			autoSchemaFile: 'schema.gql',
		}),
		ScrapperModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
