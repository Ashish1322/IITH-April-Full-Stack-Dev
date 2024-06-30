import { useEffect, useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);

  const complexTask = () => {
    console.log("Heavy Computaton Function is Running");
    // Let's assume it's a very hevy and complext funtion that is doing heavy computation
    let a = 0;
    for (let i = 0; i < 1e6; i++) {
      a += number;
    }
    return a;
  };

  const result = useMemo(() => {
    return complexTask();
  }, [number]);

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <h1>Heavy Compution Result: {result}</h1>
    </div>
  );
}

export default Memo;
