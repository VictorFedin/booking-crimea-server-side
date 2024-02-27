import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>,
  ) {}

  async findAll(page: number, limit: number): Promise<any> {
    const skip = limit * (page - 1);

    const cities = await this.repository.find({
      relations: ['hotels'],
      order: { population: 'DESC' },
      skip: skip,
      take: limit,
    });

    return cities.map((city) => ({
      city: city.name,
      photo: city.photo,
      hotelsCount: city.hotels.length,
    }));
  }
}
