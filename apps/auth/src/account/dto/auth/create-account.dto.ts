import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ROLE } from '../../entities/auth/role.entity';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(ROLE)
  roleCode: ROLE;
}
