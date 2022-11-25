import React, { useEffect, useState } from 'react';
import NewCourseForm from './components/NewCourseForm';



import './App.css';
import CoursesItem from './components/courseItem';
import { Course } from './interfaces';


const App = () => {
  const [courses, setCourses] = useState<Course[]> ([]);
  const [formVisibel,setFormVisibel] = useState<boolean>(false);
 


  const toggleFormVisibel = () => {
    setFormVisibel (!formVisibel);
  }
  const fetchCourse = () => {
    fetch('http://localhost:3001/courses')
        .then(res => res.json())
        .then(courses => {
          setCourses(courses);
        });
  }
  const handleNewCourseCreateed = (course: Course) => {
    fetchCourse();
    setFormVisibel(false);
  }


  useEffect (() => {
    fetchCourse ()
  },[]);

  return (
    <div className="App">
        <ul>
            {courses.map(item => (
              <CoursesItem key={item.id} course={item}/>
            ))}
        </ul> 
        <button onClick={toggleFormVisibel}>New Course</button>
        { formVisibel && <NewCourseForm onNewCourseCreated={handleNewCourseCreateed}/>}
    </div>
  )
}



// type AppProps = {
//   // using `interface` is also ok
//   message?: string;
// };
// type AppState = {
//   countter: number; // like this
// };
// class App extends React.Component<AppProps, AppState> {
//   state: AppState = {
//     // optional second annotation for better type inference
//     countter: 0,
//   };

//    incCounter = () => {
//     this.setState({countter: this.state.countter+1})
//   };

//   render() {
 
  
//     return (
//       <div>
//         {this.props.message ? this.props.message : "not here"} 
//         <br/>

//         Conter = {this.state.countter}
//         <br/>
//         <button onClick={this.incCounter}>Increment</button>
//         {/* <div>
//         <button onClick={() => {
//           this.setState({countter: this.state.countter=0})
//         }}>Increment1</button>
//         </div> */}
//       </div>
//     );
//   }
// }
export default App;
