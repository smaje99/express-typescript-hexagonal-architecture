import { Request, Response } from 'express';

import { UserByIdFinder } from '../../application/user-by-id-finder';
import { WelcomeEmailSender } from '../../application/welcome-email-sender';
import { UserNotFound } from '../../domain/user-not-found';

export class UserController {
  constructor(
    private readonly welcomeEmailSender: WelcomeEmailSender,
    private readonly userByIdFinder: UserByIdFinder
  ) {}

  async runWelcomeEmailSender(req: Request, res: Response) {
    const { id: userId } = req.params;
    await this.welcomeEmailSender.run(userId);
    res.status(200).json();
  }

  async runUserByIdFinder(req: Request, res: Response) {
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
