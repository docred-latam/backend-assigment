import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { IssueEntity } from "./entities/issue.entity";
import { IssueController } from "./controllers/issue.controller";
import { IssueService } from "./services/issue.service";
import { IssueSubscriber } from "./subscribers/issue.subscriber";

@Module({
  imports: [TypeOrmModule.forFeature([IssueEntity])],
  exports: [IssueService],
  controllers: [IssueController],
  providers: [IssueService, IssueSubscriber]
})
export class IssueModule {}
