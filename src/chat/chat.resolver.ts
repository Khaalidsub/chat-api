import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { CurrentUser, GqlAuthGuard } from 'src/auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { ChatService } from './chat.service';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatResolver {
  // private pubSub = new PubSub();
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() user: User,
  ) {
    createChatInput.users.push(user.id);
    return this.chatService.create(createChatInput);
  }

  @Query(() => [Chat], { name: 'chats' })
  @UseGuards(GqlAuthGuard)
  async findAll(@CurrentUser() user: User) {
    const chats = await this.chatService.findAll(user);

    return chats;
  }

  // @Query(() => Chat, { name: 'Chat' })
  // findOne(@Args('id', { type: () => String }) id: string) {
  //   return this.chatService.findOne(id);
  // }

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  updateChat(@Args('updateChatInput') updateChatInput: UpdateChatInput) {
    return this.chatService.update(updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  removeChat(@Args('id', { type: () => String }) id: string) {
    return this.chatService.remove(id);
  }
}
