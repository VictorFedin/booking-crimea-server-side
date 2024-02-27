import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hotel } from '../hotels/hotel.entity';

@Entity('conveniences')
export class Convenience extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Hotel)
  hotels: Hotel[];
}
