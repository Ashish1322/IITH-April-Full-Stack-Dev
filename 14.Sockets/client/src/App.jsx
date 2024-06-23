import { useState } from "react";
import "./App.css";

import { socket } from "./socket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          socket.connect();
          socket.on("server-response", (data) => {
            console.log("Data Received from server", data);
          });
        }}
      >
        Connect to Socket Sever
      </button>

      <button
        onClick={() => {
          socket.emit("greeting-message", {
            message: "Hi",
            sender: "Ashish",
          });
        }}
      >
        Send Message
      </button>
    </>
  );
}

export default App;
