import React, { useState } from 'react';

import './App.css';


type App2Props = {
  // using `interface` is also ok
  message?: string;
};

const App2 = (props: App2Props) => {
    const [counter, setCounter] = useState<number>(0);
    
    
    const inCounter = () =>{
        setCounter(counter + 1);
        
    }
   

    return(
        <div>
             {props.message ? props.message : "not here"} 
             <br/>
             Counter = {counter }
             <br/>
             <button onClick={inCounter}>increment</button>
           
        </div>
    )

};

export default App2;