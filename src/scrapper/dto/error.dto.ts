import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class ErrorDto {
	// dto used to shape the error return type

	@Field(() => String, { nullable: false })
	readonly path: string

	@Field(type => String, { nullable: false })
	readonly message: string
}
