import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function FriendCard({ name, img, minute, receiverId }) {
  const { setReceiver, setReceiverNameAndEmail } = useContext(AuthContext);

  return (
    <div
      onClick={() => {
        setReceiver(receiverId);
        setReceiverNameAndEmail({
          name: name,
          email: minute,
          imgUrl: img || "https://bootdey.com/img/Content/avatar/avatar1.png",
        });
      }}
      className="bg-cool p-1 px-2 d-flex flex-row gap-3"
    >
      <img
        className="rounded-circle chatimage"
        src={img || "https://bootdey.com/img/Content/avatar/avatar1.png"}
      />
      <div>
        <p className="mb-0">{name}</p>
        <p className="text-muted small">{minute}</p>
      </div>
    </div>
  );
}
