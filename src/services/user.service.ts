import { Service } from 'typedi';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

@Service()
export class UserService {
  // Esto es lo mismo que en la línea 14
  // private userRepository!: UserRepository - Declarar variable

  // constructor(userRepository: UserRepository) { // Crear un constructor y asignarle el valor.
  //   this.userRepository = userRepository;
  // }

  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }
}
