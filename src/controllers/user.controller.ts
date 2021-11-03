import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserService } from '../services/user.service';

@Service()
export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(req: Request, res: Response) {
    if (!req?.params?.roleId) {
      return res.status(400).json({ message: 'Bad request!' });
    }
    const { roleId } = req.params;
    const result = await this.userService.getAllUsers(roleId);
    if (!result) {
      return res.status(401).json({
        message: `El usuario con rol:${roleId} no puede acceder a usuarios.`,
      });
    }
    return res.json(result);
  }
}
