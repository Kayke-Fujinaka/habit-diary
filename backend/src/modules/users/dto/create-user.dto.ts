import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'John Doe',
    minLength: 1,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'O nome é de preenchimento obrigatório' })
  @IsString({ message: 'O nome deve ser um texto' })
  @MinLength(1, { message: 'O nome deve ter pelo menos 1 caractere' })
  @MaxLength(255, { message: 'O nome não pode ter mais que 255 caracteres' })
  name: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'john.doe@example.com',
    minLength: 1,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'O e-mail é de preenchimento obrigatório' })
  @IsEmail({}, { message: 'O e-mail deve ser válido' })
  @MinLength(1, { message: 'O e-mail deve ter pelo menos 1 caractere' })
  @MaxLength(255, { message: 'O e-mail não pode ter mais que 255 caracteres' })
  email: string;

  @ApiProperty({
    description: 'Telefone do usuário',
    example: '+5511999999999',
    format: 'número no formato brasileiro',
  })
  @IsNotEmpty({ message: 'O telefone é de preenchimento obrigatório' })
  @IsMobilePhone(
    'pt-BR',
    {},
    { message: 'O telefone deve ser um número brasileiro válido' },
  )
  telephone: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'Password@1234',
    minLength: 8,
    format: 'deve incluir letras maiúsculas, minúsculas, números e símbolos',
  })
  @IsNotEmpty({ message: 'A senha é de preenchimento obrigatório' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message:
        'A senha deve conter pelo menos 8 caracteres, incluindo um maiúsculo, um minúsculo, um número e um especial',
    },
  )
  password: string;
}
