import { Injectable } from '@nestjs/common';
import { CountriesService } from '../countries/countries.service';
import { StatesService } from '../states/states.service';
import { CitiesService } from '../cities/cities.service';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly countriesService: CountriesService,
    private readonly statesService: StatesService,
    private readonly citiesService: CitiesService,
  ) {}

  async loadCountriesStatesCitiesData() {}
}
