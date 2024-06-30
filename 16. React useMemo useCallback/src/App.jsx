import { useEffect, useState, useMemo, useCallback } from "react";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);

  const c = useMemo(() => count, [count]);

  const d = useCallback(() => {
    return () => console.log("HI");
  }, [count]);

  return (
    <div>
      <Count count={c} fun={d} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
}

export default App;
