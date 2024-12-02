import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { LessonsModule } from './lessons/lessons.module';
import { SourcesModule } from './sources/sources.module';
import { SchedualsModule } from './scheduals/scheduals.module';

@Module({
  imports: [StudentsModule, LessonsModule, SourcesModule, SchedualsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
