import { IRole } from './role.model';

export interface IUser {
  id: string;
  name: string;
  age: number;
  role?: IRole;
}
