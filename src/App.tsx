import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter, { CounterContext } from './Counter';
import { Button } from '@mui/material';
import LocalizedStringsContext from './LocalizedStringsContext';


const IncrementButton = () => {
  const {increment} = useContext(CounterContext);
  const localizedStrings = useContext(LocalizedStringsContext);
  
  return (
    <Button type="button" variant="contained" onClick={increment}>{localizedStrings[0]}</Button>
  )
}

const DecrementButton = () => {
  const {decrement} = useContext(CounterContext);
  const localizedStrings = useContext(LocalizedStringsContext);

  return (
    <Button type="button" variant="text" onClick={decrement}>{localizedStrings[1]}</Button>
  )
}
 

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
