import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { error } from 'console';
import { SourcesService } from './sources.service';

@Controller('sources')
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Get()
  getAll() {
    return this.sourcesService.getAll();
  }

  // throw new HttpException(
  //   'Internal server error brp, 500',
  //   HttpStatus.INTERNAL_SERVER_ERROR,
  // );

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `User ID is: ${id}`;
    throw new Error();
    // throw new HttpException(
    //   'Internal server error brp, 500',
    //   HttpStatus.INTERNAL_SERVER_ERROR,
    // );
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return `You apperentaly removed user with id ${id}, cry.`;
  }
}
