import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAccountRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class LoginAccountResponseDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  identification: string;

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  addressId: null | number;

  @ApiProperty()
  createAt: string;

  @ApiProperty()
  updateAt: string;
}
