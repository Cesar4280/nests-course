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

function getAutomaticUnsignedIncrementIdGenerator(
  START_WITH: number = 1,
  SECURE_MODE: boolean = false,
) {
  if (SECURE_MODE) {
    const IS_SAFE_VALUE =
      typeof START_WITH === 'number' &&
      Number.isInteger(START_WITH) &&
      START_WITH > 0 &&
      START_WITH < 100_000_000;
    if (!IS_SAFE_VALUE) START_WITH = 1;
  }
  return () => START_WITH++;
}

@Injectable()
export class UsersService {

  private assignId = getAutomaticUnsignedIncrementIdGenerator();

  private users: Array<User> = [
    {
      id: this.assignId(),
      name: 'Jhon Doe',
      email: 'jhon@gmail.com',
      password: 'jhonpassword',
      age: 20,
    },
    {
      id: this.assignId(),
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      password: 'janepassword',
      age: 25,
    },
    {
      id: this.assignId(),
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
    const id = this.assignId();
    const newUser = { id, ...user };
    this.users.push(newUser);
    return this.users;
  }

  updateUser(id: number, newUserData: UpdateUserDto) {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound)
      return new NotFoundException(`User with id ${id} not found`);
    Object.getOwnPropertyNames(newUserData).forEach((property) => {
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
