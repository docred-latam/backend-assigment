import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProblemModel } from '../problems/models/problem.model';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { AgentsModel } from './models/agent.model';

@Module({
  imports: [TypegooseModule.forFeature([ProblemModel, AgentsModel])],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule {}
