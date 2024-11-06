import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  @ApiTags('users')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getUsers() {
    return this.usersService.getUsers();
  }

  /*
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }
  */

  @Post('/users')
  @ApiTags('users')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'Return the created task' })
  @ApiResponse({ status: 401, description: 'Not logged in' })
  @ApiResponse({ status: 403, description: "Lack of permission" })
  @ApiResponse({ status: 500, description: "Api Potato" })
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  /*
  @Patch(':id')
  editUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserData: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, newUserData);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserData: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, newUserData);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
  */
}
