import { User } from 'src/entities/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
}

export { IUsersRepository };
