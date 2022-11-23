import { type } from 'os';
import React, { useEffect, useState } from 'react';
import {interface} from './interfaces'

type CourseItemProps = {
    course: interface,
};

const CoursesItem = (props: CourseItemProps) => {
    const course: interface = props.course;
    return (
        <li>{course.number}</li>
    );
}

export default CoursesItem;