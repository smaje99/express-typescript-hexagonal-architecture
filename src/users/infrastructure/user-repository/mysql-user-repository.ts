import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user-repository';
import userDatabase from './user-database.json';

export class MySQLUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    console.log('Using MySQL');

    const user = userDatabase.find((user) => user.id === userId);

    return user ? new User(user.id, user.email) : null;
  }
}
