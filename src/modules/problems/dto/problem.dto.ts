import { IsString, IsBoolean, IsOptional, IsMongoId, IsNotEmpty } from "class-validator";

export class ProblemDto {

  @IsMongoId()
  @IsOptional()
  readonly _id;

  @IsString({ message: 'La descripción del error es obligatoria' })
  @IsNotEmpty({ message: 'La descripción del error es obligatoria' })
  readonly description;

  @IsMongoId()
  @IsOptional()
  readonly agent;

  @IsString()
  @IsOptional()
  readonly solution;

  @IsBoolean()
  @IsOptional()
  readonly isClosed;

}

export class SolveDto {

  @IsMongoId({ message: 'El id del problema es un campo requerido' })
  readonly problemId;

  @IsString({ message: 'La solución es un campo requerido' })
  readonly solution;

}
