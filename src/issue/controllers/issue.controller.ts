import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";

import { CreateIssueDto } from "./../dtos/create-issue.dto";
import { IssueService } from "./../services/issue.service";

@Controller("issues")
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Get()
  getAll() {
    return this.issueService.getAll();
  }

  @Post()
  create(@Body() issue: CreateIssueDto) {
    return this.issueService.create(issue);
  }

  @Put(":id")
  update(@Param("id") id: string) {
    return this.issueService.update(id);
  }
}
