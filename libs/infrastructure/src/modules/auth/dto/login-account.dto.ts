import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAccountDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
