import React from 'react';
import './App.css';
import { Stopwatch } from './stopwatch';

function App() {
  return (
    <div className="App">
      <Stopwatch interval={10}></Stopwatch>
    </div>
  );
}

export default App;
