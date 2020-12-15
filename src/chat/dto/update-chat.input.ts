import { CreateChatInput } from './create-chat.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateChatInput extends PartialType(CreateChatInput) {
  @Field(() => ID)
  id: string;
}
