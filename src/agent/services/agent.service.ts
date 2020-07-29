import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { CreateAgentDto } from "./../dtos/create-agent.dto";
import { AgentEntity } from "./../entities/agent.entity";

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(AgentEntity)
    private agentRepository: Repository<AgentEntity>
  ) {}

  async getAll() {
    const agents = await this.agentRepository.find();
    return agents;
  }

  async create(agent: CreateAgentDto) {
    const createdIssue = await this.agentRepository.save(agent);
    return createdIssue;
  }

  async update(id: string) {
    const agent = await this.agentRepository.findOne(id);
    agent.isAvailable = !agent.isAvailable;
    const updatedAgent = await this.agentRepository.save(agent);
    return updatedAgent;
  }
}
