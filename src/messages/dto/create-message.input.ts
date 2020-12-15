import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => String)
  chat: string;
  @Field(() => String)
  message: string;
  @Field(() => String)
  sender: string;
}
