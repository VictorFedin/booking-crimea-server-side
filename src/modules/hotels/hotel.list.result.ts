import { ApiProperty } from '@nestjs/swagger';
import { Convenience } from '../conveniences/convenience.entity';

export class HotelListResult {
  @ApiProperty({ example: 'Ялта-Интурист' })
  name: string;

  @ApiProperty({
    example: 'Республика Крым, 298650, г. Ялта, ул. Дражинского, 50',
  })
  address: string;

  @ApiProperty({ example: 50 })
  rooms: number;

  @ApiProperty({ example: 75 })
  totalPlaces: number;

  @ApiProperty({ example: ['Автостоянка', 'Wi-Fi', 'Бассейн'] })
  conveniences: Convenience[];

  @ApiProperty({ example: 7200 })
  cheapestPrice: number;

  @ApiProperty({ example: 75 })
  availableHotels: number;

  @ApiProperty({ example: 100 })
  totalHotels: number;
}
