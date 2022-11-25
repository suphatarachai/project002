import { Injectable } from '@nestjs/common';
import  Courses  from './courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses) 
    private coursesRepository: Repository<Courses>
  ) {}

   async findAll(): Promise<Courses[]>{
      return this.coursesRepository.find();
    }
    async create(createCourseDto: CreateCourseDto){
      return this.coursesRepository.save(createCourseDto);
    }

}