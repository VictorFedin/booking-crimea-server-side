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

  async findAll(page: number, limit: number): Promise<City[]> {
    const skip = limit * (page - 1);

    return await this.repository
      .createQueryBuilder('city')
      .innerJoinAndSelect('city.state', 'state')
      .where('state.name = :name', { name: 'Autonomous Republic of Crimea' })
      .skip(skip)
      .take(limit)
      .getMany();
  }
}
