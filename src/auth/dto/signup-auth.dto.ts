import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  Min,
} from 'class-validator';
import { Role } from '../../common/enums/role';
import { UserStatus } from '../../common/enums/user.status';

export class SignUpAuthDto {
  @ApiProperty({
    type: String,
    description: 'User name',
  })
  @IsOptional()
  @Min(3)
  @Max(50)
  name: string;

  @ApiProperty({
    type: String,
    description: 'User username',
  })
  @IsString()
  @Min(3)
  @Max(50)
  username: string;

  @ApiProperty({
    type: String,
    description: 'User email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'User password',
  })
  @IsString()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    type: Number,
    description: "User's age",
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    type: String,
    description: 'User gender',
    enum: ['MALE', 'FEMALE'],
  })
  gender: string;

  @ApiProperty({
    type: String,
    description: 'User statuss',
    enum: UserStatus,
  })
  status: UserStatus;

  @ApiProperty({
    type: String,
    description: 'User role  default student',
    enum: Role,
  })
  role: string;
}
