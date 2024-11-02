import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private getAutoIncrementIdGenerator(count = 1) {
    return () => count++;
  }
  private assignId = this.getAutoIncrementIdGenerator();

  private users: Array<{ id: number; name: string; phone: string }> = [
    { id: this.assignId(), name: 'Jhon Doe', phone: '123456789' },
    { id: this.assignId(), name: 'Jhane Doe', phone: '0987456321' },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return (
      this.users.find((user) => user.id === id) ?? {
        message: 'User Not Exist',
        error: 'Not Found',
        statusCode: 404,
      }
    );
  }

  addUser(newUserData: { name: string; phone: string }) {
    const userDto = {
      id: this.assignId(),
      name: newUserData.name,
      phone: newUserData.phone,
    };
    this.users.push(userDto);
    return this.users;
  }

  updateUser(id: number, newUserData: { name: string; phone: string }) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1)
      return { message: 'User Not Exist', error: 'Not Found', statusCode: 404 };
    if (newUserData.name) this.users[index].name = newUserData.name;
    if (newUserData.phone) this.users[index].phone = newUserData.phone;
    return this.users[index];
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    return index > -1
      ? this.users.splice(index, 1)
      : { message: 'User Not Exist', error: 'Not Found', statusCode: 404 };
  }
}
