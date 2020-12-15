import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { User } from '../users/entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from './guards/graph-auth.guard';
import { UserDocument } from 'src/users/schemas/user.schema';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async loginUser(
    @Args('email') email: string,
    @Args('username') username: string,
  ) {
    const result = await this.authService.validateUser({
      email,
      username,
    });
    if (result) {
      return this.authService.login({ email: email, sub: result.id });
    }
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async currentUser(@CurrentUser() user: User) {
    return user;
  }
}
