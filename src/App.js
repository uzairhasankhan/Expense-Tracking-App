import React,{useState}  from 'react';

import './App.css';



function App() {
    let [count, setCount] = useState(100);
    let [isLite, setDay] = useState(false)
    
    return (
    
    <div className={`box ${isLite? "dayLight" : "nightLight"}`}>
    {/* <Msg counter={count}/>    */}

    <h1>Value of counters is {count}</h1>
    
    
    <button className="Button" onClick={
        ()=> setCount(++count) 
    }> 
     Update Counter</button>

    <hr />
    <br />

    <h1>Day time: {isLite ? 'Morning' : 'Night'}</h1>
    
     <br />
    
    <button className="Button" onClick={()=> setDay(!isLite)}> Set Light</button>
    </div>
    );
}

export default App;