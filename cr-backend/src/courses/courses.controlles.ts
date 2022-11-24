import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

import { Course } from './courses.entity';


@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}
  @Get()
    async findAlll(): Promise<Course[]> {
    return this.coursesService.findAll();
      };
  }


