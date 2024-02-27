import { ApiProperty } from '@nestjs/swagger';

export class CitiesResult {
  @ApiProperty({ example: 'Ялта' })
  city: string;

  @ApiProperty({ example: 'https://somesite.com/photo.jpg' })
  photo: string;

  @ApiProperty({ example: 100 })
  totalHotels: number;
}
