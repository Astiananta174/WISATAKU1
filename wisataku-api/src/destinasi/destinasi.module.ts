import { Module } from '@nestjs/common';

import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';
import { DestinasiResolver } from './destinasi.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DestinasiController],
  providers: [DestinasiService, DestinasiResolver],
})
export class DestinasiModule {}