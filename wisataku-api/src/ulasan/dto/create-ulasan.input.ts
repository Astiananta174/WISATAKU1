import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, Min, Max } from 'class-validator';

@InputType()
export class CreateUlasanInput {
  @Field(() => Int)
  @IsInt()
  destinasiId: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @Field()
  @IsString()
  komentar: string;
}