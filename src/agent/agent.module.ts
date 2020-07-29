import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentController } from "./controllers/agent.controller";
import { AgentEntity } from './entities/agent.entity';
import { AgentService } from "./services/agent.service";

@Module({
  imports: [TypeOrmModule.forFeature([AgentEntity])],
  controllers: [AgentController],
  exports: [AgentService],
  providers: [AgentService],
})
export class AgentModule { }
