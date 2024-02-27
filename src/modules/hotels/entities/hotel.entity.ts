import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HotelType } from '../enums/hotel.type.enum';
import { Room } from '../../rooms/room.entity';
import { Convenience } from '../../conveniences/convenience.entity';
import { City } from '../../cities/entities/city.entity';

@Entity('hotels')
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({
    type: 'float',
    name: 'cheapest_price',
    nullable: true,
    default: 0.0,
  })
  cheapestPrice: number;

  @ManyToMany(() => Convenience, (convenience) => convenience.hotels)
  @JoinTable()
  conveniences: Convenience[];

  @Column({ nullable: true })
  placementTerms: string; // TODO new table

  @Column({ nullable: true })
  reviews: string; // TODO new table

  @Column({ type: 'enum', enum: HotelType, nullable: true })
  type: HotelType;

  @Column({ nullable: true })
  cityId: number;

  @ManyToOne(() => City, (city) => city.hotels)
  @JoinTable()
  city: City;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
