import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from '../services/cities.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CitiesResult } from '../dto/cities.result';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiTags('Города')
  @ApiOperation({
    summary: 'Получить список популярных городов',
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ type: CitiesResult, isArray: true, status: 200 })
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<CitiesResult[]> {
    return await this.citiesService.findAll(page, limit);
  }
}
