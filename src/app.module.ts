import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';
import { autoPopulateAllFields } from 'mongoose-autopopulator';
// import { autoPopulateAllFields } from 'mongoose-autopopulator';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req, connection }) => {
        if (connection?.context) {
          return { req: { headers: connection.context } };
        }
        return req;
      },
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [ChatModule, UsersModule, MessagesModule, AuthModule],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB || 'localhost'}/chat-system`,
      {
        connectionFactory: (connection) => {
          connection.plugin(autoPopulateAllFields);

          return connection;
        },
      },
    ),

    ChatModule,
    UsersModule,
    AuthModule,
    MessagesModule,
  ],
})
export class AppModule {}
