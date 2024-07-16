import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [PromptController],
  providers: [PromptService,DatabaseService],
})
export class PromptModule {}
