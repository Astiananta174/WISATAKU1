import { Module } from '@nestjs/common';

import { UlasanResolver } from './ulasan.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UlasanResolver],
})
export class UlasanModule {}