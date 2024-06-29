import { useSelector, useDispatch } from "react-redux";
import { increaeCounter, decreaseCounter } from "./redux/slices/counter";
function App() {
  const { counter } = useSelector((state) => state);
  const dipatch = useDispatch();
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() =>
          dipatch(
            increaeCounter({
              value: 1,
            })
          )
        }
      >
        Increase Counter
      </button>
      <button
        onClick={() => {
          dipatch(
            decreaseCounter({
              value: 1,
            })
          );
        }}
      >
        Decreaes Counter{" "}
      </button>
    </div>
  );
}

export default App;
