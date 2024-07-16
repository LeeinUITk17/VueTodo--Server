import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly databaseService: DatabaseService
  ) {}
  async create(todo: CreatePostDto): Promise<any> {
    const post= await this.databaseService.post.create({
       data:{
              title: todo.title,
              content: todo.content
       } 
     });
     return post;
  }
  async findAll(): Promise<any> {
    const posts= await this.databaseService.post.findMany();
    return posts;
  }
  async findOne(postid: string): Promise<any> {
    const post= await this.databaseService.post.findUnique({
      where: {id: postid},
    });
    return post;
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }
  async update(postid: string, updatePostDto: UpdatePostDto) {
    const post= await this.databaseService.post.update({
      where: {id: postid},
      data: updatePostDto,
    });
    return post;
  }


  async remove(postid: string): Promise<any> {
    const post= await this.databaseService.post.delete({
      where: {id: postid},
    });
    return post;
  }
}
