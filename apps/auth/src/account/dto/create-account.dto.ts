import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ROLE } from '../entities/role.entity';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEnum(ROLE)
  roleCode: ROLE;

  @IsInt()
  enable: number;
}
