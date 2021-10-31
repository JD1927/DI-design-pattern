import { Service } from 'typedi';
import { User } from '../models/user.model';

@Service()
export class UserRepository {
  private readonly users: User[] = [
    { id: 'AB1', name: 'Emily', age: 20 },
    { id: 'CD2', name: 'John', age: 21 },
    { id: 'FG1', name: 'Jane', age: 22 },
  ];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
