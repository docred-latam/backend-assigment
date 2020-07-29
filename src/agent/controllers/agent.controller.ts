import { Controller, Get, Post, Put, Body } from "@nestjs/common";

import { AgentService } from "./../services/agent.service";
import { CreateAgentDto } from './../dtos/create-agent.dto';

@Controller("agents")
export class AgentController {
    constructor(
        private readonly agentService: AgentService
    ) { }

    @Get()
    getAll() {
        return this.agentService.getAll();
    }

    @Post()
    create(@Body() agent: CreateAgentDto) {
        return this.agentService.create(agent)
    }

}
