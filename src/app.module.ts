import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AgentController } from "./agent/controllers/agent.controller";
import { AgentEntity } from "./agent/entities/agent.entity";
import { AgentModule } from "./agent/agent.module";

import { IssueEntity } from "./issue/entities/issue.entity";
import { IssueController } from "./issue/controllers/issue.controller";
import { IssueModule } from "./issue/issue.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "root",
      password: "root",
      database: "app",
      entities: [IssueEntity, AgentEntity],
      synchronize: true
    }),
    IssueModule,
    AgentModule
  ],
  controllers: [IssueController, AgentController]
})
export class AppModule {}
