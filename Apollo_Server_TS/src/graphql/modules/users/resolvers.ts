import bcrypt from 'bcrypt';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserInput, UserInputUpdate } from './userSchema';
import UserDB from '../../../models/users';

@Resolver()
class users {
  @Query(() => [User])
  async users() {
    return await UserDB.find();
  }

  @Query(() => User)
  async user(@Arg('id') id: string) {
    return await UserDB.findById(id);
  }

  @Mutation(() => User)
  async createUser(@Arg('data') userInput: UserInput) {
    const passwordHash = await bcrypt.hash(userInput.password, 12);
    return await UserDB.create({ ...userInput, passwordHash });
  }

  @Mutation(() => User)
  async updateUser(@Arg('data') userInput: UserInputUpdate) {
    return await UserDB.findByIdAndUpdate(userInput.id, userInput, { new: true });
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string) {
    return !!(await UserDB.findByIdAndDelete(id));
  }
}

export default { users };
