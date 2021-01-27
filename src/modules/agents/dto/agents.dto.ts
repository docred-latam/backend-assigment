import { IsString, IsBoolean, IsOptional, IsMongoId, IsNotEmpty } from "class-validator";

export class AgentDto {

  @IsMongoId()
  @IsOptional()
  readonly _id;

  @IsString({ message: 'El nombre del agente es un campo obligatorio' })
  @IsNotEmpty({ message: 'El nombre del agente es un campo obligatorio' })
  readonly name;

  @IsString()
  @IsOptional()
  readonly position;

  @IsBoolean()
  @IsOptional()
  readonly isFree;

  @IsMongoId()
  @IsOptional()
  readonly problem;

}
