import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Landlord } from './landlord.entity';

@Entity('landlord_social_links')
export class LandlordSocialLinks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2, nullable: true })
  language: string;

  @Column({ length: 100, nullable: true })
  telegram: string;

  @Column({ length: 100, nullable: true })
  instagram: string;

  @Column({ length: 100, nullable: true })
  facebook: string;

  @Column({ length: 100, nullable: true })
  vkontakte: string;

  @Column({ length: 100, nullable: true })
  whatsapp_phone: string;

  @Column({ name: 'is_primary', nullable: true, default: false })
  isPrimary: boolean;

  @Column({ nullable: true })
  landlordId: number;

  @ManyToOne(() => Landlord)
  @JoinColumn({ name: 'landlordId' })
  landlord: Landlord;
}
