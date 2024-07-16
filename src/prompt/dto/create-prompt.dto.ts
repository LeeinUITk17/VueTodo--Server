export enum Type {
    CODE_GENERATION = "CODE_GENERATION",
    DEBUGGING = "DEBUGGING",
    CODE_REVIEW = "CODE_REVIEW",
  }
  
  export enum Language {
    JAVA = "JAVA",
    JAVASCRIPT = "JAVASCRIPT",
    PYTHON = "PYTHON",
    CSHARP = "CSHARP",
    PHP = "PHP",
    RUBY = "RUBY",
    GO = "GO",
    SWIFT = "SWIFT",
    KOTLIN = "KOTLIN",
    TYPESCRIPT = "TYPESCRIPT",
    HTML = "HTML",
    CSS = "CSS",
    SQL = "SQL",
    PERL = "PERL",
    LUA = "LUA",
}
  
  import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
  
  export class CreatePromptDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsEnum(Language)
    language: Language;
  
    @IsEnum(Type)
    type: Type;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    description: string;
  }