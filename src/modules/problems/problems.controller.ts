import { Controller, Get, HttpStatus , Post, Put, Delete, Param, Body, UseFilters, HttpException } from '@nestjs/common';
import { ProblemsService } from "./problems.service";
import { ProblemModel } from "./models/problem.model";
import { ProblemDto, SolveDto } from "./dto/problem.dto";
import { HttpExceptionFilter } from "../../config/http-exception.filter";
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('problems')
export class ProblemsController {

  constructor(private readonly _problemService: ProblemsService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter)
  async getAll(): Promise<ProblemModel[] | null> {
    return this._problemService.findAll();
  }

  @Get('/:id')
  @UseFilters(new HttpExceptionFilter)
  async getOne(@Param('id') id: string): Promise<ProblemModel | null> {
    return this._problemService.findOne(id);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter)
  async create(@Body(new ValidationPipe()) body: ProblemDto): Promise<any> {
    try {
      return await this._problemService.create(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  @UseFilters(new HttpExceptionFilter)
  async modify(@Body(new ValidationPipe()) body: ProblemDto): Promise<ProblemModel | null> {
    try {
      return await this._problemService.modify(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Put('/solve')
  @UseFilters(new HttpExceptionFilter)
  async solve(@Body(new ValidationPipe()) body: SolveDto): Promise<ProblemModel | null> {
    try {
      return await this._problemService.solve(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete('/:id')
  @UseFilters(new HttpExceptionFilter)
  async delete(@Param('id') id: string): Promise<any> {
    try {
      return await this._problemService.deleteOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
