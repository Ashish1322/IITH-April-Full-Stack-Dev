import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function FriendCard({ name, img, minute, receiverId }) {
  const { setReceiver } = useContext(AuthContext);

  return (
    <div
      onClick={() => {
        setReceiver(receiverId);
      }}
      className="bg-cool p-1 px-2 d-flex flex-row gap-3"
    >
      <img className="rounded-circle chatimage" src={img} />
      <div>
        <p className="mb-0">{name}</p>
        <p className="text-muted small">{minute}</p>
      </div>
    </div>
  );
}
