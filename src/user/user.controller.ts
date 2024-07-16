import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseService } from 'src/database/database.service';
import { get } from 'http';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() userInfo: any): Promise<any> {
    const user = await this.userService.create(userInfo);
    return user;
  }
}

