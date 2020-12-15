import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Chat {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  ChatName: string;
  @Field(() => String)
  description: string;
  @Field(() => [User])
  users: User[];
}
