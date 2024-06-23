import SendBox from "./SendBox";
import Message from "./Message";
import { CurrentChatBar } from "./CurrentChatBar";
import { useContext, useRef, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

export default function Rightbar() {
  const { messages, user } = useContext(AuthContext);

  const lastDivRef = useRef(null);

  useEffect(() => {
    lastDivRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="col col-9 p-0 right">
      <CurrentChatBar />
      <div className="middle overflow-auto" style={{ height: 420 }}>
        {messages.map((item, index) => (
          <Message message={item.message} sender={user._id == item.sender} />
        ))}

        <div ref={lastDivRef}></div>
      </div>
      <div className="bottom m-2 mt-3">
        <SendBox />
      </div>
    </div>
  );
}
