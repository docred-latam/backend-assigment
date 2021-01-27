import { Controller, Get, HttpStatus , Post, Put, Delete, Param, Body, UseFilters, HttpException } from '@nestjs/common';
import { AgentsService } from "./agents.service";
import { AgentsModel } from "./models/agent.model";
import { AgentDto } from "./dto/agents.dto";
import { HttpExceptionFilter } from "../../config/http-exception.filter";
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('agents')
export class AgentsController {
  constructor(private readonly _agentsService: AgentsService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter)
  async getAll(): Promise<AgentsModel[] | null> {
    return this._agentsService.findAll();
  }

  @Get('/:id')
  @UseFilters(new HttpExceptionFilter)
  async getOne(@Param('id') id: string): Promise<AgentsModel | null> {
    return this._agentsService.findOne(id);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter)
  async create(@Body(new ValidationPipe()) body: AgentDto): Promise<AgentsModel | null> {
    try {
      return await this._agentsService.create(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  @UseFilters(new HttpExceptionFilter)
  async modify(@Body(new ValidationPipe()) body: AgentDto): Promise<AgentsModel | null> {
    try {
      return await this._agentsService.modify(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete('/:id')
  @UseFilters(new HttpExceptionFilter)
  async delete(@Param('id') id: string): Promise<any> {
    try {
      return await this._agentsService.deleteOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
