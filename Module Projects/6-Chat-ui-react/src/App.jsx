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

export default function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

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
          setUser({ name: data.name, email: data.email, token: data.token });
          // store the user in the localstorage also
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: data.name,
              email: data.email,
              token: data.token,
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

  // whenever you will reaload the window check if user is in localsotrage fetch it
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
      navigate("/");
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <AuthContext.Provider
        value={{ signup, login, user, logout, sendRequest }}
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
