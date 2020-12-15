import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser } from '../types';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User implements IUser {
  @Prop()
  username: string;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
