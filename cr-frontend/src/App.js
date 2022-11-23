import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [courses, setCourses] = useState ([]);

  useEffect (() => {
    fetch('http://localhost:3001/courses')
        .then(res => res.json())
        .then(courses => {
          setCourses(courses);
        });
  },[]);

  
  
  return (
    <div className="App">
      <ul>
      {courses.map(item => (
        <li  key={item.id}>{item.number}-{item.title}</li>
        
      ))}
      </ul>
    </div>

  );
  
}



// type AppMyState = {
//    message: String;
// };

// class App extends React.Component<{}, AppState> {
//   state: AppState = {
    
//     message: 'Default message',
//   };

//   componentDidMount() { 
//     fetch('http://localhost:3001/courses')
//       .then(res => res.json())
//       .then(obj => {
//         this.setState({message: obj.message});
//       });
//     }

//   render() {
//     return (
//       <div>
//         {this.state.message}
//       </div>
//     );
//   }
// }
export default App;
