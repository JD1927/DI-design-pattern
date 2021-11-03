import { Service } from 'typedi';
import { IUser } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { RoleService } from './role.service';

@Service()
export class UserService {
  // Esto es lo mismo que en la línea 14
  // private userRepository!: UserRepository - Declarar variable

  // constructor(userRepository: UserRepository) { // Crear un constructor y asignarle el valor.
  //   this.userRepository = userRepository;
  // }

  constructor(
    private userRepository: UserRepository,
    private roleService: RoleService
  ) {}

  async getAllUsers(roleId: string): Promise<IUser[] | undefined> {
    const selectedRole = await this.roleService.getRoleById(roleId);
    if (selectedRole?.name === 'ADMIN') {
      return await this.userRepository.getAllUsers();
    }
    return undefined;
  }
}
