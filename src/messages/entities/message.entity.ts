import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Chat } from '../../chat/entities/chat.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Message {
  @Field(() => Chat)
  chat: Chat;
  @Field(() => String)
  message: string;
  @Field(() => User)
  sender: User;
}
