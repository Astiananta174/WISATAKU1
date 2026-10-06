import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { Ulasan } from './entities/ulasan.entity';
import { CreateUlasanInput } from './dto/create-ulasan.input';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Ulasan)
export class UlasanResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Ulasan, { name: 'tambahUlasan' })
  async tambahUlasan(
    @Args('input', { type: () => CreateUlasanInput })
    input: CreateUlasanInput,
  ) {
    console.log('INPUT GRAPHQL:', input);

    return this.prisma.ulasan.create({
      data: {
        destinasiId: input.destinasiId,
        rating: input.rating,
        komentar: input.komentar,
      },
    });
  }
}