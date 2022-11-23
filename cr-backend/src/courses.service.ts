
import { Injectable } from '@nestjs/common';
import { Courses } from './interfaces/courses.interdaces';

@Injectable()
export class CoursesService {
   async findAll(): Promise<Courses[]>{
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

    }
}