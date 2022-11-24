import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controlles';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './courses.entity';


@Module ({
    imports:[TypeOrmModule.forFeature([Course])],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {}