import { Injectable } from '@nestjs/common';
import { AgentsModel } from "./models/agent.model";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AgentDto } from './dto/agents.dto';

@Injectable()
export class AgentsService {
  constructor(@InjectModel(AgentsModel) private readonly _agentModel: ReturnModelType<typeof AgentsModel>) {}

  findAll = async (): Promise<AgentsModel[] | null> => {
    return await this._agentModel.getAgents();
  }

  findOne = async (id:string): Promise<AgentsModel | null> => {
    return await this._agentModel.findById(id);
  }

  create = async (body: AgentDto): Promise<AgentsModel | null> => {
    const document = new this._agentModel(body);
    return await document.save();
  }

  modify = async (body: AgentDto): Promise<AgentsModel | null> => {
    return await this._agentModel.findByIdAndUpdate(body._id,body,{new:true});
  }

  deleteOne = async (id: string) : Promise<any> => {
    return await this._agentModel.findOneAndUpdate({_id: id}, {$set: {isActive: false}},{new:true});
  }

}
