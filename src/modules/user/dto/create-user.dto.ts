import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password should be at least 8 characters long' })
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50, { message: 'First name should not exceed 50 characters' })
  firstName: string;
}
