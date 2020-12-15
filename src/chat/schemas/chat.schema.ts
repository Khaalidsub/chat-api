import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
export type ChatDocument = Chat & Document;
@Schema()
export class Chat {
  @Prop()
  ChatName: string;
  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
