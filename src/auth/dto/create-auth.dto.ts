import { IsEmail, IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  accessToken?: string;

}