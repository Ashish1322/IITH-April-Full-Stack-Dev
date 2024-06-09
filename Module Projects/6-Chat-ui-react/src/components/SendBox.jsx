import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../contexts/AuthContext";

function SendBox() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(AuthContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <div className="mb-3 d-flex flex-row border border-1 rounded ">
        <div className="border-end border-1 p-2">
          <i className="fa fa-send" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="px-2 border-0 outline-none  flex-grow-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
          required
        />
      </div>
    </form>
  );
}

export default SendBox;
