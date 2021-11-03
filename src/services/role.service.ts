import { Service } from 'typedi';
import { IRole } from '../models/role.model';
import { RoleRepository } from '../repositories/role.repository';

@Service()
export class RoleService {
  constructor(private roleRepository: RoleRepository) {}

  async getAllRoles(): Promise<IRole[]> {
    return await this.roleRepository.getAllRoles();
  }

  async getRoleById(roleId: string): Promise<IRole | undefined> {
    return await this.roleRepository.getRoleById(roleId);
  }
}
