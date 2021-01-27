import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { ProblemModel } from './models/problem.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { AgentsModel } from '../agents/models/agent.model';

@Module({
  imports: [TypegooseModule.forFeature([ProblemModel, AgentsModel])],
  providers: [ProblemsService],
  controllers: [ProblemsController]
})

export class ProblemsModule {}
