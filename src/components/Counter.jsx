import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p id="counter">Button clicked {count} times</p>
      <button id="click" onClick={() => setCount(prev => prev + 1)}>
        Click Me
      </button>
    </div>
  );
}
