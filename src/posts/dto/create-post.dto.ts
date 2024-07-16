import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    title: string;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(1500)
    content: string;

}
