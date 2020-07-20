import React from 'react';

import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Random from './components/Random'
import Sum from './components/Sum'

function App() {
  return (
    <div className="App">
      <h1>Exercise React-Redux</h1>
      <div className="line">
        <Interval></Interval>
      </div>
      <div className="line">
        <Average></Average>
        <Random></Random>
        <Sum></Sum>
      </div>
    </div>
  );
}

export default App;
