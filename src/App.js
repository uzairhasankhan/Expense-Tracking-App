import React from 'react';
import Dinner from './Dinner';
import './App.css';


function App() {
    return (<div className="App">
    <h1>Expense Tracking App</h1>
    <hr />
    <Dinner dishName="Chicken Biryani" />
    </div>
    );
}

export default App;