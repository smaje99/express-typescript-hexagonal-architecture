import { config } from '../../config';
import { UserByIdFinder } from '../application/user-by-id-finder';
import { WelcomeEmailSender } from '../application/welcome-email-sender';
import { UserRepository } from '../domain/user-repository';
import { FakeEmailSender } from './email-sender/fake-email-sender';
import { UserGetController } from './http/user-get-controller';
import { UserPostController } from './http/user-post-controller';
import { ElasticUserRepository } from './user-repository/elastic-user-repository';
import { InMemoryUserRepository } from './user-repository/in-memory-user-repository';
import { MongoUserRepository } from './user-repository/mongo-user-repository';
import { MySQLUserRepository } from './user-repository/mysql-user-repository';

const getUserRepository = (): UserRepository => {
  switch (config.database) {
    case 'mongo':
      return new MongoUserRepository();
    case 'elastic':
      return new ElasticUserRepository();
    case 'mySQL':
      return new MySQLUserRepository();
    case 'inMemory':
      return new InMemoryUserRepository();
    default:
      throw new Error('Invalid database type');
  }
};

const userRepository = getUserRepository();

const fakeEmailSender = new FakeEmailSender();

const welcomeEmailSender = new WelcomeEmailSender(userRepository, fakeEmailSender);
const userByIdFinder = new UserByIdFinder(userRepository);

export const userGetController = new UserGetController(userByIdFinder);
export const userPostController = new UserPostController(welcomeEmailSender);
