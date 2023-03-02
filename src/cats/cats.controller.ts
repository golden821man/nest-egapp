import { Controller, Get, Post, Req } from '@nestjs/common';
import { Param, Redirect } from '@nestjs/common/decorators';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  // @Get()
  // @Redirect('https://mynest', 301)
  // // create(): string {
  // //   return 'This action adds a new cat';
  // // }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  @Get('ab*cd')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats'
  }
}
