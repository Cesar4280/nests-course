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

class UserDto {
  name: string;
  phone: string;
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  addUser(@Body() newUserData: UserDto) {
    return this.usersService.addUser(newUserData);
  }

  @Patch(':id')
  editUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserData: UserDto,
  ) {
    return this.usersService.updateUser(id, newUserData);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserData: UserDto,
  ) {
    return this.usersService.updateUser(id, newUserData);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
