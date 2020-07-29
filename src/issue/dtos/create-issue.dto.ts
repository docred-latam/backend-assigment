import { IsNotEmpty } from "class-validator";

export class CreateIssueDto {
  @IsNotEmpty()
  name: string;
}
