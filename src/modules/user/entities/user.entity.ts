import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserGenderEnum } from '../enum/user-gender.enum';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ unique: true, nullable: true })
  nickname: string;

  @Column({ name: 'phone_number', unique: true, nullable: true })
  phoneNumber: string;

  @Column({ type: 'date', name: 'birth_date', nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  citizenship: string;

  @Column({ type: 'enum', enum: UserGenderEnum, nullable: true })
  gender: UserGenderEnum;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  address: string;

  @Column({ name: 'zip_code', nullable: true })
  zipCode: number;

  @Column({ nullable: true })
  avatar: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName || ''}`;
  }

  getFullAddress(): string {
    return `${this.country}, ${this.city}, ${this.address}, ${this.zipCode}`;
  }
}
