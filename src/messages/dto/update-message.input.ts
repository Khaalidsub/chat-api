import { CreateMessageInput } from './create-message.input';
import { InputType, Field, ID, OmitType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class UpdateMessageInput extends OmitType(CreateMessageInput, [
  'sender',
]) {
  @Field(() => ID)
  id: string;
  @Field(() => User)
  sender: User;
}
