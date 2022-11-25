import { type } from 'os';
import React, { useEffect, useState } from 'react';
import {Course} from '../interfaces'

type NewCourseFormProps = {
    onNewCourseCreated?: (newCourse: Course) =>void
};

const NewCourseForm = (props: NewCourseFormProps) => {

    const [newCourseNumber, setNewCourseNumber] = useState<string>('');
    const [newCourseTitle, setNewCourseTitle] = useState<string>('');
    
  const handleCourseNumberChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewCourseNumber(e.target.value)
 }

 const handleSave = () => {
  const newCourse ={
    number:newCourseNumber,
    title:newCourseTitle,
  };

  fetch("http://localhost:3001/courses",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newCourse),
  })
  .then(res => res.json())
  .then(savenewCourse => {
    if(savenewCourse.id !== undefined){
      if(props.onNewCourseCreated !== undefined){
        props.onNewCourseCreated(savenewCourse)
      }else{
        alert("Save error");
      }
     
      console.log(savenewCourse);
      
    }
  });


  // alert(`${newCourseNumber} -- ${newCourseTitle}`)
 }
    return(
        <div>
        Number:<input value={newCourseNumber} onChange={handleCourseNumberChange} /><br/>
        Title: <input value={newCourseTitle} onChange={(e)=>{setNewCourseTitle(e.target.value)}}/> <br/>
        <button onClick={handleSave}>Save</button>
      </div>
    )
}

export default NewCourseForm;