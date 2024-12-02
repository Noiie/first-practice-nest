import {
  Body,
  Controller,
  Delete,
  Get,
  //   HttpException,
  //   HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
// import { error } from 'console';
import { LessonsService } from './lessons.service';
import { IsInt, IsString, Min } from 'class-validator';

class LessonDto {
  @IsInt()
  @Min(1)
  number: number;
  @IsString()
  chapter: string;
  @IsString()
  title: string;
}

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  //   class createLessons {
  //     @NotExist
  //   }

  @Get()
  getAll() {
    return this.lessonsService.getAll();
  }

  @Post()
  addLesson(@Body() body: LessonDto) {
    console.log(body);
    return this.lessonsService.addLesson(body);
  }

  @Get(':id')
  getLessonById(@Param('id') id: string) {
    return `lesson ID is: ${id}`;
    throw new Error();
  }

  @Delete(':id')
  deleteLessonById(@Param('id') id: string) {
    return `You apperentaly removed lesson with id ${id}, cry.`;
  }
}
