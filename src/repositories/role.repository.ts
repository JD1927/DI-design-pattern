import { Service } from 'typedi';
import { IRole } from '../models/role.model';

@Service()
export class RoleRepository {
  private readonly roles: IRole[] = [
    { id: '01', name: 'ADMIN' },
    { id: '02', name: 'STUDENT' },
  ];

  async getAllRoles(): Promise<IRole[]> {
    return this.roles;
  }
  async getRoleById(roleId: string): Promise<IRole | undefined> {
    const roles = await this.getAllRoles();
    const selectedRole: IRole | undefined = roles.find(
      (role) => role.id === roleId
    );
    return selectedRole;
  }
}
