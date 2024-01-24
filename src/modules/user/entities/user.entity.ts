import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserGenderEnum } from '../enum/user-gender.enum';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ unique: true, nullable: false })
  @ApiProperty()
  email: string;

  @Column({ nullable: false })
  @ApiProperty()
  password: string;

  @Column({ name: 'first_name', nullable: false })
  @ApiProperty()
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  @ApiPropertyOptional()
  lastName: string;

  @Column({ unique: true, nullable: true })
  @ApiPropertyOptional()
  nickname: string;

  @Column({ name: 'phone_number', unique: true, nullable: true })
  @ApiPropertyOptional()
  phoneNumber: string;

  @Column({ type: 'date', name: 'birth_date', nullable: true })
  @ApiPropertyOptional()
  birthDate: Date;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  citizenship: string;

  @Column({ type: 'enum', enum: UserGenderEnum, nullable: true })
  @ApiPropertyOptional()
  gender: UserGenderEnum;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  country: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  city: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  address: string;

  @Column({ name: 'zip_code', nullable: true })
  @ApiPropertyOptional()
  zipCode: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  avatar: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName || ''}`;
  }

  getFullAddress(): string {
    return `${this.country}, ${this.city}, ${this.address}, ${this.zipCode}`;
  }
}
