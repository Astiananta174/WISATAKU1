import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinasiModule } from './destinasi/destinasi.module';
import { PrismaModule } from './prisma/prisma.module';
import { UlasanModule } from './ulasan/ulasan.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'wisataku-api',
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    DestinasiModule,
    PrismaModule,
    UlasanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}