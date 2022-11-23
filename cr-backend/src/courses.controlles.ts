import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

// import { Courses } from './interfaces/courses.interdaces';


@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}
  @Get()
    async findAlll(): Promise<Courses[]> {
    return this.coursesService.findAll();
       
  
  
  
  
      };
  }


