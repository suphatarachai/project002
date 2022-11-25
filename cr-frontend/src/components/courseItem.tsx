import { type } from 'os';
import React, { useEffect, useState } from 'react';
import {Course} from '../interfaces'

type CourseItemProps = {
    course: Course,
};

const CoursesItem = (props: CourseItemProps) => {
    const course: Course = props.course;
    return (
        <li className="Course">{course.number}-{course.title}</li>
    );
}

export default CoursesItem;