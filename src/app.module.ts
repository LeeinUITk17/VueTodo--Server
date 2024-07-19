import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { PromptModule } from './prompt/prompt.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DatabaseModule, UserModule, PostsModule, PromptModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
