import { Controller, Get } from '@nestjs/common';


@Controller('courses')
export class CoursesController {

  @Get()
  findAlll(): any {
    return { 
        message : 'Hello Word'
    };
  }
}

