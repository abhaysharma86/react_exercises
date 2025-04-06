import React, { useState } from 'react'

const HandlingStateUpdatesBasedPreviousState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) => prevCount + 1); // Use previous state to update
    };
  
    const decrement = () => {
      setCount((prevCount) => prevCount - 1); // Use previous state to update
    };
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

export default HandlingStateUpdatesBasedPreviousState
