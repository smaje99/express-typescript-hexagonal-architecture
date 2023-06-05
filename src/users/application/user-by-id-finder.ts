import { User } from '../domain/user';
import { UserNotFound } from '../domain/user-not-found';
import { UserRepository } from '../domain/user-repository';

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userId: string): Promise<User> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new UserNotFound(userId);
    }

    return user;
  }
}
