import React,{useState}  from 'react';
import Dinner from './Dinner';
import './App.css';
import { Msg } from './msg';


function App() {
    let [count, setCount] = useState(100)
    
    return (<div className="App">
    <Msg counter={count}/>   
    <h1>Value of counters is {count}</h1>
    <hr />
    <button className='App' onClick={
        ()=> setCount(++count) 
    }> 
     Update Counter</button>
    </div>
    );
}

export default App;