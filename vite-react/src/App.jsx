 import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

    const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>COUNTER : {count}</h1>

      <button onClick={ increase}>
        Add value
      </button>

      <button onClick={ decrease}>
        Remove value
      </button>
    </>
  );
}

export default App;
