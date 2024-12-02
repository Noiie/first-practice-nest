import { Injectable } from '@nestjs/common';

const lessons = [
  {
    number: 1,
    chapter: 'A',
    title: 'A traumatizing sadna about Linux',
  },
];

@Injectable()
export class LessonsService {
  getAll(): string {
    return JSON.stringify(lessons);
  }

  addLesson(lesson: object): object {
    return lesson;
  }
}
