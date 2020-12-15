import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChatInput {
  @Field(() => String, { description: 'Chat Name' })
  ChatName: string;
  @Field(() => String, { description: 'Description of the chat' })
  description: string;

  @Field(() => [String])
  users: string[];
}
