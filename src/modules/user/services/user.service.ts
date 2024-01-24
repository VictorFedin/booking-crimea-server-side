import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // CRUD ⚙️
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async getUserById(userId: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.getUserById(userId);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.update(userId, updateUserDto);

    return await this.getUserById(userId);
  }

  async delete(userId: number): Promise<void> {
    const existingUser = await this.getUserById(userId);

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.delete(userId);
  }
}
