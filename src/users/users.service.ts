import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  age: number;
}

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      id: 1,
      name: 'Jhon Doe',
      email: 'jhon@gmail.com',
      password: 'jhonpassword',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      password: 'janepassword',
      age: 25,
    },
    {
      id: 3,
      name: 'Jhonny Doe',
      email: 'jhonny@gmail.com',
      password: 'jhonnypassword',
      age: 30,
    },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return (
      this.users.find((user) => user.id === id) ??
      new NotFoundException(`User with id ${id} not found`)
    );
  }

  createUser(user: CreateUserDto) {
    const id = this.users.length + 1;
    const newUser = { id, ...user };
    this.users.push(newUser);
    return this.users;
  }

  updateUser(id: number, newUserData: UpdateUserDto) {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound)
      return new NotFoundException(`User with id ${id} not found`);
    Object.getOwnPropertyNames(newUserData).forEach(property => {
      userFound[property] = newUserData[property];
    });
    return userFound;
  }

  deleteUser(id: number) {
    const indexFound = this.users.findIndex((user) => user.id === id);
    return indexFound === -1
      ? new NotFoundException(`User with id ${id} not found`)
      : this.users.splice(indexFound, 1);
  }
}
