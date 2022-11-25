import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import Course from './courses/courses.entity';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'mydb',
      entities: [Course],
      synchronize: true,
    }),

    CoursesModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
