import { Request, Response } from 'express';

import { UserByIdFinder } from '../../application/user-by-id-finder';
import { UserNotFound } from '../../domain/user-not-found';

export class UserGetController {
  constructor(private readonly userByIdFinder: UserByIdFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { id: userId } = req.params;
      const user = await this.userByIdFinder.run(userId);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).send();
    }
  }
}
