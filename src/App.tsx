import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter, { CounterContext } from './Counter';


const IncrementButton = () => {
  const {increment} = useContext(CounterContext);
  const localizedStrings = useContext(LocalizedStringsContext);
  
  return (
    <button type="button" onClick={increment}>{localizedStrings[0]}</button>
  )
}

const DecrementButton = () => {
  const {decrement} = useContext(CounterContext);
  const localizedStrings = useContext(LocalizedStringsContext);

  return (
    <button type="button" onClick={decrement}>{localizedStrings[1]}</button>
  )
}


let defaultStrings:string[] = [];
const LocalizedStringsContext = createContext(defaultStrings); 

const App = () => {
  const [localizedStrings] = useState(['Increment', 'Decrement']);

  return (
    <LocalizedStringsContext.Provider value={localizedStrings}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Counter>
            <IncrementButton></IncrementButton>
            <DecrementButton></DecrementButton>
          </Counter>
        </header>
      </div>
    </LocalizedStringsContext.Provider>
  );
}

export default App;
