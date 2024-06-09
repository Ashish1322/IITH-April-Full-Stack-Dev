import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import FriendCard from "./FriendCard";

export default function Leftbar() {
  const { sendRequest, friends, user } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  console.log(friends);
  console.log(user);
  return (
    <div className="col col-3 p-3 left border-end border-1 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendRequest(email);
          setEmail("");
        }}
      >
        <div className="mb-3 d-flex flex-row border border-1 rounded ">
          <div className="border-end border-1 p-2">
            <i className="fa-solid fa-magnifying-glass" />
          </div>

          <input
            type="text"
            placeholder="Add friends by email"
            className="px-2 border-0 outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            required
          />
        </div>
      </form>
      <div className="overflow-auto" style={{ height: 470 }}>
        {friends.map((item, index) => (
          <FriendCard
            name={
              item.sender._id == user._id
                ? item.receiver.name
                : item.sender.name
            }
            img="https://bootdey.com/img/Content/avatar/avatar1.png"
            minute={
              item.sender._id == user._id
                ? item.receiver.email
                : item.sender.email
            }
            receiverId={
              item.sender._id == user._id ? item.receiver._id : item.sender._id
            }
          />
        ))}
        {friends.length == 0 ? (
          <p className="text-center">No friends in the friend list!</p>
        ) : null}
      </div>
    </div>
  );
}
