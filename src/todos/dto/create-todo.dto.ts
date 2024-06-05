import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'Nest JS' })
  @IsString()
  readonly title: string;

  @ApiProperty({ example: 'Learn Nest JS', required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  readonly done?: boolean;
}
