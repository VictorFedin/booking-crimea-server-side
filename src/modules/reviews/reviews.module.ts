import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [],
  providers: [],
  exports: [],
})
export class ReviewsModule {}
