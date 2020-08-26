import React, {useState} from 'react';

import './App.css';
import Parent from './parent.js';
import counterContext from './CounterContext.js';
function App() {
  //let [count, setCount] = useState(25);
  let countState = useState(1)
  return (
    <counterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
