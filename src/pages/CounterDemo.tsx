import React, { useContext, useState } from 'react';
import './App.css';
import Counter, { CounterContext } from '../components/Counter';
import { Button } from '@mui/material';
import LocalizedStringsContext from '../LocalizedStringsContext';


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
 

const CounterDemo = () => {
  const [localizedStrings] = useState(['Increment', 'Decrement']);

  return (
    <LocalizedStringsContext.Provider value={localizedStrings}>
      <div className="App">
        <header className="App-header">
          <h1>Demo - Counter</h1>
          <Counter>
            <IncrementButton></IncrementButton>
            <DecrementButton></DecrementButton>
          </Counter>
        </header>
      </div>
    </LocalizedStringsContext.Provider>
  );
}

export default CounterDemo;
