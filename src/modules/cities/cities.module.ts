import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { CitiesController } from './controllers/cities.controller';
import { CitiesService } from './services/cities.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitiesController],
  providers: [CitiesService],
  exports: [TypeOrmModule],
})
export class CitiesModule {}
