import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // CRUD ⚙️
  @Post()
  @ApiOperation({
    summary: 'Create new user',
    description: 'Create new user by credentials',
  })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User was successfully created',
    type: User,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Get existing user information by given ID',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'User was successfully found',
    type: User,
  })
  async getUserById(@Param('id') userId: number): Promise<User> {
    return await this.userService.getUserById(userId);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description:
      'Outputs an array of users with detailed information about them',
  })
  @ApiResponse({
    status: 200,
    description: 'Users were successfully found',
    type: User,
    isArray: true,
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update user information',
    description: 'Update user information based on the received data',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'User info was successfully updated',
    type: User,
  })
  async update(
    @Param('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(userId, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete user',
    description: 'Delete user with given ID',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'User was successfully deleted',
  })
  async delete(@Param('id') userId: number): Promise<{ message: string }> {
    await this.userService.delete(userId);
    return { message: 'User was successfully deleted' };
  }
}
