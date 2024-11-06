import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  age: number;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUser(id: number) {
    return this.prisma.user.findUnique({ where: { id: id.toString() } });
    // new NotFoundException(`User with id ${id} not found`);
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }

  updateUser(id: number, newUserData: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id.toString() },
      data: newUserData,
    });
  }

  deleteUser(id: number) {
    this.prisma.user
      .delete({ where: { id: id.toString() } })
      .then(console.log)
      .catch(console.error)
      .finally(() => console.log('deleteUser(id: number)'));
  }
}
