import { Injectable } from '@nestjs/common';
import { CreatePromptDto, Language } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PromptService {

  constructor(
    private readonly promptService: DatabaseService
  ){}

 async create(prompt: CreatePromptDto):Promise<any> {
    const promptDto = await this.promptService.template.create({
         data: {
            name: prompt.name,
            type: prompt.type,
            language: prompt.language,
            description: prompt.description,
         }
    });
    return promptDto;
  }

  async findAll(): Promise<any> {
    const prompts=await this.promptService.template.findMany();
    return prompts;
  }

  async findOne(promptsid: string): Promise<any> {
    const prompt= await this.promptService.template.findUnique({
      where: {id: promptsid},
    });
    return prompt;
  }

  async update(promptsid: string, updatePromptDto: UpdatePromptDto) {
    const prompt= await this.promptService.template.update({
      where: {id: promptsid},
      data: updatePromptDto,
    });
    return prompt;
  }

  async remove(promptsid: string) :Promise<any>{
    const prompt= await this.promptService.template.delete({
      where: {id: promptsid},
    });
    return prompt;
  }
}
