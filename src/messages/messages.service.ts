import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from 'src/chat/entities/chat.entity';
import { User } from '../users/entities/user.entity';

import { CreateMessageInput } from './dto/create-message.input';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private MessageModel: Model<MessageDocument>,
  ) {}

  create(Message: CreateMessageInput) {
    const createdMessage = new this.MessageModel(Message);
    return createdMessage.save();
  }

  findAll(user: User) {
    return this.MessageModel.find({ sender: user }).exec();
  }

  findOne(query) {
    return this.MessageModel.findOne(query).exec();
  }

  findById(id: string) {
    return this.MessageModel.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.MessageModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.MessageModel.findByIdAndDelete(id).exec();
  }
}
