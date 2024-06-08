import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import FriendCard from "./FriendCard";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // you are not logged in and still trying to access this route
    if (user == null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      {user != null ? (
        <div className="row mt-4 rounded bg-white shadow-sm">
          <Leftbar />
          <Rightbar />
          <hr />
          {/* UI To Show the current Logged in user info */}
          <div className=" p-1 px-2 d-flex flex-row gap-3 mt-2 align-items-center">
            <img
              className="rounded-circle chatimage"
              src={"https://bootdey.com/img/Content/avatar/avatar1.png"}
            />
            <div>
              <p className="mb-0">{user.name}</p>
              <p className="text-muted small">{user.email}</p>
            </div>
            <div
              onClick={() => logout()}
              style={{ fontSize: "20px" }}
              className="click"
            >
              <i class="fa-solid fa-right-from-bracket"></i>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
