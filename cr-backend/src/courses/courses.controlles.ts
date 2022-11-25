import { Body, Controller, Get, Post,HttpException,HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';

import { Course } from './courses.entity';
import { CreateCourseDto } from './dto/create-course.dto';


@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}
  @Get()
    async findAlll(): Promise<Course[]> {
    return this.coursesService.findAll();
      };

    
   @Post()
    async create(@Body() createCourseDto: CreateCourseDto){
      if((createCourseDto.number !== undefined) &&
      (createCourseDto.title !== undefined)){
        const newcourse = this.coursesService.create(createCourseDto);
        return newcourse;
      }else{
        throw new HttpException('Bad request',HttpStatus.BAD_REQUEST);
      }
      
    }
  }


