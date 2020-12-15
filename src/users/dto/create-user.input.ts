import { InputType, Int, Field } from '@nestjs/graphql';
import { IUser } from '../types';

@InputType()
export class CreateUserInput implements IUser {
  @Field(() => String)
  username: string;
  @Field(() => String)
  email: string;
}
