import React from 'react';
import { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCnt((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        {cnt}
      </button>
    </div>
  );
};

export default Counter;
