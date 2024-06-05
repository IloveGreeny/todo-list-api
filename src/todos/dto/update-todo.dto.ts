import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({ example: 'Buy groceries', required: false })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiProperty({ example: 'Milk, Bread, Butter', required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ example: false, required: false })
  @IsBoolean()
  @IsOptional()
  readonly done?: boolean;
}
