import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Landlord } from './landlord.entity';

@Entity('contact_persons')
export class ContactPerson extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 100, nullable: true })
  firstName: string;

  @Column({ name: 'last_name', length: 100, nullable: true })
  lastName: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 100, nullable: true })
  phone: string;

  @Column({ nullable: true })
  landlordId: number;

  @ManyToOne(() => Landlord, (landlord) => landlord.contactPersons)
  @JoinColumn({ name: 'landlordId' })
  landlord: Landlord;

  @Column({ name: 'is_primary', default: false })
  isPrimary: boolean;
}
