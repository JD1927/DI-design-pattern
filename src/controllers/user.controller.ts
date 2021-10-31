import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserService } from '../services/user.service';

@Service()
export class UserController {
  constructor(private userService: UserService) {}

  async getAllUsers(_req: Request, res: Response) {
    const result = await this.userService.getAllUsers();
    return res.json(result);
  }
}
