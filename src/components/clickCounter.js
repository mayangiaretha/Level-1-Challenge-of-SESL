import React, { useState, useEffect } from "react";

const COUNT_KEY = "count";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem(COUNT_KEY);
    if (storedCount) {
      const parsedCount = parseInt(storedCount, 10);
      setCount(parsedCount);
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(COUNT_KEY, newCount.toString());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick}>
        counter
      </button>
    </div>
  );
};

export default ClickCounter;
