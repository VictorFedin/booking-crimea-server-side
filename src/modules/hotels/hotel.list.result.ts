import { ApiProperty } from '@nestjs/swagger';
import { Convenience } from '../conveniences/convenience.entity';

export class HotelListResult {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  rooms: number;

  @ApiProperty()
  totalPlaces: number;

  @ApiProperty()
  conveniences: Convenience[];

  @ApiProperty()
  cheapestPrice: number;

  @ApiProperty()
  availableHotels: number;

  @ApiProperty()
  totalHotels: number;
}
