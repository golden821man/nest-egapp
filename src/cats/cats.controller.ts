import { Controller, Get, Post, Req } from '@nestjs/common';
import { Body, Delete, Param, Put, Query, Redirect } from '@nestjs/common/decorators';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './create-cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
