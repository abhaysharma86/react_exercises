import React, { useState } from 'react'

const LazyInitialization = () => {
  // Lazy initialization: only computes the initial value when the component mounts
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1); // Store the updated count in localStorage
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default LazyInitialization
