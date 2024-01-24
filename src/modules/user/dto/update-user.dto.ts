import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { UserGenderEnum } from '../enum/user-gender.enum';

export class UpdateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  lastName: string;

  @ApiProperty()
  @IsOptional()
  nickname: string;

  @ApiProperty()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  birthDate: Date;

  @ApiProperty()
  @IsOptional()
  citizenship: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(UserGenderEnum)
  gender: UserGenderEnum;

  @ApiProperty()
  @IsOptional()
  country: string;

  @ApiProperty()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsOptional()
  zipCode: number;

  @ApiProperty()
  @IsOptional()
  avatar: string;
}
