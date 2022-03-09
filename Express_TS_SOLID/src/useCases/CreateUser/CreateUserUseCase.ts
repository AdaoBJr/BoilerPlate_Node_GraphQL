import { User } from 'src/entities/User';
import { IUsersRepository } from 'src/repositories/IUsersRepository';
import { ICreateUserDTO } from './CreateUserDTO';

class CreateUserUseCase {
  constructor(private usersRespository: IUsersRepository) {}

  async execute(data: ICreateUserDTO) {
    const userExists = await this.usersRespository.findByEmail(data.email);
    if (userExists) throw new Error('User already exists');

    const user = new User(data);
    await this.usersRespository.create(user);
    return user;
  }
}

export { CreateUserUseCase };
