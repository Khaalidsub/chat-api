import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { IUser } from '../types';

@ObjectType()
@InputType('ChatUser')
export class User implements IUser {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  email: string;
}
