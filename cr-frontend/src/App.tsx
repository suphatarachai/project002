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
              <li key={item.id}>{item.number}-{item.title}</li>
            ))}
        </ul>
    </div>
  );
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
}
export default App;
