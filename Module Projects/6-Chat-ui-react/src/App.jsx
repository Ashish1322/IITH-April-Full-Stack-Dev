import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { Route, Routes, useNavigate } from "react-router-dom";

// contexts
import AuthContext from "./contexts/AuthContext";

// react toatisfy
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

// Socket
import socket from "./socket";

export default function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);

  const signup = (name, email, password, gender) => {
    fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ name, email, password, gender }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/login"); // Once signup is done redirect to the login page
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  const login = (email, password) => {
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({
            name: data.name,
            email: data.email,
            token: data.token,
            _id: data._id,
          });
          // store the user in the localstorage also
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: data.name,
              email: data.email,
              token: data.token,
              _id: data._id,
            })
          );
          navigate("/");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const sendRequest = (email) => {
    fetch("http://localhost:3001/user/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: user.token,
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  const fetchAllFriends = () => {
    fetch("http://localhost:3001/user/friends", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: user.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFriends(data.friends);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  // whenever you will reaload the window check if user is in localsotrage fetch it
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (user != null) {
      fetchAllFriends();
      // when the user is looged in successfully then only connect to the socket
      socket.connect();

      const combinedId =
        user._id > receiver ? user._id + receiver : receiver + user._id;
      socket.on(combinedId, (payload) => {
        console.log("Message Received ", payload);
        setMessages((prev) => [...prev, payload]);
      });

      // cleanup funtion
      return () => {
        socket.disconnect();
      };
    }
  }, [user, receiver]);

  const sendMessage = (message) => {
    if (user != null && receiver != null) {
      socket.emit("send-message", {
        message,
        sender: user._id,
        receiver: receiver,
      });
    }
  };

  const fetchAllMessages = () => {
    fetch(`http://localhost:3001/user/messages/${receiver}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: user.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessages(data.chats);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    if (user != null && receiver != null) fetchAllMessages();
  }, [user, receiver]);
  return (
    <div>
      <ToastContainer />
      <AuthContext.Provider
        value={{
          signup,
          login,
          user,
          logout,
          sendRequest,
          friends,
          setReceiver,
          sendMessage,
          messages,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}
