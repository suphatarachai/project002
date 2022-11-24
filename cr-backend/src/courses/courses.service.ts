import { Injectable } from '@nestjs/common';
import  Courses  from './courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses) 
    private coursesRepository: Repository<Courses>
  ) {}

   async findAll(): Promise<Courses[]>{
      return this.coursesRepository.find();

      //   return [
      //       { 
      //         id : '100',
      //         number : '100011',
      //         title : 'map'
      //       },
    
      //     { 
      //      id : '101',
      //       number : '200011',
      //       title : 'thai'
      //    },
    
      //   { 
      //     id : '102',
      //     number : '300011',
      //     title : 'lap'
      //   }
      
      // ];

    }
}