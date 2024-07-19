import { IsEmail, IsOptional, IsString} from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  accessToken?: string;

}