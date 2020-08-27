import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tribe-spaces'),
    SpaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
