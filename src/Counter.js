import React, { useState } from 'react';

function CounterApp() {
  
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  const decrement = () => {
    if(
      count >= 1  
    )
      
    {setCount(prevCount => prevCount - 1);}
    
  };


  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="mb-4 text-3xl font-bold">Counter App</h1>
      <p className="mb-4 text-xl">Count: {count}</p>
      <div className="flex justify-center">
        <button onClick={increment} className="px-4 py-2 mr-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
          İncrease 
        </button>
        <button onClick={decrement} className="px-4 py-2 mx-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
          Decrease
        </button>
        <button onClick={reset} className="px-4 py-2 ml-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700">
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
