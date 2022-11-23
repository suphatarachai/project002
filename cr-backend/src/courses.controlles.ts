import { Controller, Get } from '@nestjs/common';


@Controller('courses')
export class CoursesController {

  @Get()
  findAlll(): any {
    return [
        { 
          id : '100',
          number : '100011',
          title : 'map'
        },

      { 
       id : '101',
        number : '200011',
        title : 'thai'
     },

    { 
      id : '102',
      number : '300011',
      title : 'lap'
    }
  
  ];
  
  
  
      };
  }


