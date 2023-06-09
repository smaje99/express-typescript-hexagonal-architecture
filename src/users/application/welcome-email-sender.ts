import { EmailSender } from '../domain/email-sender';
import { UserNotFound } from '../domain/user-not-found';
import { UserRepository } from '../domain/user-repository';

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string) {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new UserNotFound(userId);
    }

    await this.emailSender.send(user.email, 'Welcome to our application!');
  }
}
