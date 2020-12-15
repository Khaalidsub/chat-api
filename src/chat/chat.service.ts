import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private ChatModel: Model<ChatDocument>) {}

  create(createChatInput: CreateChatInput) {
    const newChat = new this.ChatModel(createChatInput);

    return newChat.save();
  }

  findAll(user: User) {
    return this.ChatModel.find({ users: user }).exec();
  }

  findOne(id: string) {
    return this.ChatModel.findById(id).exec();
  }
  //!find chats that are for a specific users
  // findQuery(userId:string){
  //   return this.ChatModel.find({'users': userId})
  // }

  update(id: string, data: any) {
    return this.ChatModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.ChatModel.findByIdAndDelete(id).exec();
  }
}
