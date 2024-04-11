import { Controller, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Администрирование ⚙️')
@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('load-data-countries-states-cities')
  async loadDataCountriesStatesCities() {
    await this.databaseService.loadCountriesStatesCitiesData();
  }
}
