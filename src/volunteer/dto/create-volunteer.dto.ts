import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVolunteerDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty()
  name: string;

  @IsEmail({ allow_display_name: true }, { message: 'Invalid email' })
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'role must be a string' })
  @IsOptional()
  role?: string;

  @IsString({ message: 'team must be a string' })
  @IsOptional()
  team?: string;

  @IsString({ message: 'photo must be a string' })
  @IsOptional()
  photo?: string;

  @IsNumber({}, { message: 'mentorCoins must be a number' })
  @IsOptional()
  mentorCoins?: number;

  @IsBoolean({ message: 'active must be a boolean' })
  @IsOptional()
  active?: boolean;
}
