import { ReactNode, createContext, useState } from "react";


export const CounterContext = createContext({counter: 0, increment: () => {}, decrement: () => {}});

interface ICounterProps {
  children: ReactNode
}

const Counter = ({children}:ICounterProps) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <CounterContext.Provider value={{counter, increment, decrement}}>
        {children}
      </CounterContext.Provider>
    </div>
  )
}

export default Counter;