import { Injectable } from '@nestjs/common';
import { ProblemModel } from "./models/problem.model";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { ProblemDto, SolveDto } from './dto/problem.dto';
import { AgentsModel } from '../agents/models/agent.model';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectModel(ProblemModel) private readonly _problemModel: ReturnModelType<typeof ProblemModel>,
    @InjectModel(AgentsModel) private readonly _agentModel: ReturnModelType<typeof AgentsModel>,
  ) {}

  findAll = async (): Promise<ProblemModel[] | null> => {
    return await this._problemModel.getProblems();
  }

  findOne = async (id:string): Promise<ProblemModel | null> => {
    return await this._problemModel.findById(id);
  }

  create = async (body: ProblemDto): Promise<any> => {
    const problem = new this._problemModel(body);
    const agentsFree = await this._agentModel.findOne({ isFree: true });
    if (agentsFree) {
      problem.agent = agentsFree._id;
      agentsFree.isFree = false;
      agentsFree.problem = problem._id;
      await agentsFree.save();
      await problem.save();
      return { Message: `Problema creado con éxito y se le asignó a ${agentsFree.name}` };
    } else {
      return { Message: 'Problema creado, se le asignará un agente cuando esté disponible' };
    }
  }

  modify = async (body: ProblemDto): Promise<ProblemModel | null> => {
    return await this._problemModel.findByIdAndUpdate(body._id,body,{new:true});
  }

  solve = async (body: SolveDto) : Promise<any> => {
    const problem = await this._problemModel.findById(body.problemId);
    if (!problem) {
      return { message: 'No se encontró el problema por el id' }
    }
    if (problem.isClosed) {
      return { message: 'El problema ya cuenta con una solución ' }
    }
    problem.solution = body.solution;
    problem.isClosed = true;
    problem.save();
    const agent = await this._agentModel.findById(problem.agent);
    if (agent) {
      agent.isFree = true;
      const newProblem = await this._problemModel.findOne({isClosed: false, agent: { $exists: false } });
      if (newProblem) {
        newProblem.agent = agent._id;
        agent.isFree = false;
        agent.problem = newProblem._id;
        await newProblem.save();
        return { message: `Problema solucionado con éxito!, y se le ha asignado un nuevo problema a ${agent.name}` }
      } else {
        agent.problem = null;
      }
      await agent.save();
    }
    return { message: 'Problema solucionado con éxito!!' }
  }

  deleteOne = async (id: string) : Promise<any> => {
    return await this._problemModel.findOneAndUpdate({_id: id}, {$set: {isActive: false}},{new:true});
  }
}
