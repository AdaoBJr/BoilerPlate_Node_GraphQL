import { Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
class customer {
  @Query(() => String)
  async customer() {
    return 'customer data!';
  }

  @Mutation(() => String)
  async customerLogin() {
    return 'Login realizado com sucesso!!';
  }
}

export default { customer };
