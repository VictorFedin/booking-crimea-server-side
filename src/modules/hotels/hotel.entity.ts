import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HotelType } from './hotel.type.enum';
import { Room } from '../rooms/room.entity';
import { Convenience } from '../conveniences/convenience.entity';

@Entity('hotels')
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

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

  @Column()
  placementTerms: string; // TODO new table

  @Column()
  reviews: string; // TODO new table

  @Column({ type: 'enum', enum: HotelType, nullable: true })
  type: HotelType;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
