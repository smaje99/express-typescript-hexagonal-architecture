import { User } from '../domain/user';
import { UserRepository } from '../domain/user-repository';

const users: User[] = [
  { id: '1', email: 'albert.hello@gmail.com' },
  { id: '2', email: 'pepe.hello@gmail.com' },
  { id: '1117554273', email: 'smajefranco@gmail.com' },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
