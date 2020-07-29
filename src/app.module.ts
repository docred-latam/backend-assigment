import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

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
      entities: [IssueEntity],
      synchronize: true
    }),
    IssueModule
  ],
  controllers: [IssueController]
})
export class AppModule {}
