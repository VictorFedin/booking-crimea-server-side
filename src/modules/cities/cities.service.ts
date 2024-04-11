import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesResult } from './cities.result';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>,
  ) {}

  async create(city: City) {
    return await this.repository.save(city);
  }

  async findAll(page: number, limit: number): Promise<CitiesResult[]> {
    const skip = limit * (page - 1);

    const cities = await this.repository.find({
      relations: { hotels: true },
      order: { population: 'DESC' }, // TODO change order by hotels count
      skip: skip,
      take: limit,
    });

    return cities.map((city) => ({
      city: city.name,
      photo: city.photo,
      totalHotels: city.hotels.length,
    }));
  }
}
