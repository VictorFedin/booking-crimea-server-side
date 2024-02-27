import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from '../services/cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.citiesService.findAll(page, limit);
  }
}
