import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { CreateIssueDto } from "./../dtos/create-issue.dto";
import { IssueEntity } from "../entities/issue.entity";

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(IssueEntity)
    private issueRepository: Repository<IssueEntity>
  ) {}

  async getAll() {
    const issues = await this.issueRepository.find();
    return issues;
  }

  async create(issue: CreateIssueDto) {
    const createdIssue = await this.issueRepository.save(issue);
    return createdIssue;
  }

  async update(id: string) {
    const issue = await this.issueRepository.findOne(id);
    issue.isSolved = true;
    const updatedIssue = await this.issueRepository.save(issue);
    return updatedIssue;
  }
}
