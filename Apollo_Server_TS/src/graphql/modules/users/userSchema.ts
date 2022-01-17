import { IsEmail } from 'class-validator';
import { ObjectType, Field, ID, InputType, Root } from 'type-graphql';

@ObjectType()
export class fullName {
  _doc: {
    firstName: string;
    lastName: string;
  };
}
@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  fullName(@Root() parent: fullName): string {
    return `${parent._doc.firstName} ${parent._doc.lastName}`;
  }

  @Field()
  email: string;
}

@InputType()
export class UserInput {
  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UserInputUpdate {
  @Field(() => ID)
  id: string;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
