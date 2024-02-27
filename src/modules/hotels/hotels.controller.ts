import { Controller, Get, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'cityId', required: false })
  async getHotels(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 8,
    @Query('cityId') cityId?: number,
  ) {
    return await this.hotelsService.getHotelsByCityId(page, limit, cityId);
  }
}
