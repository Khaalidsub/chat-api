import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ICredential } from '../types';

@ObjectType()
export class Auth implements ICredential {
  @Field(() => String)
  email: string;
  @Field(() => String)
  username: string;
}
