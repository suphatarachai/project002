import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [message, setMessage] = useState ('My message 1');

  useEffect (() => {
    fetch('http://localhost:3001/courses')
        .then(res => res.json())
        .then(obj => {
          setMessage(obj.message);
        });
  },[]);

  console.log(message);
  
  return (
    <div className="App">
       {message}
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
