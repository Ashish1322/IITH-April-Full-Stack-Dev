import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export function CurrentChatBar() {
  const { receiverNameAndEmail } = useContext(AuthContext);
  return (
    <div className="top d-flex justify-content-between align-items-center border-bottom border-1 pt-2 px-3">
      <div className="px-2 d-flex flex-row  gap-3">
        <img
          className="rounded-circle chatimage-sm mt-1"
          src={receiverNameAndEmail && receiverNameAndEmail.imgUrl}
        />
        <div>
          <p className="mb-0">
            {receiverNameAndEmail && receiverNameAndEmail.name}
          </p>
          <p className="text-muted small">
            {receiverNameAndEmail && receiverNameAndEmail.email}
          </p>
        </div>
      </div>
    </div>
  );
}
