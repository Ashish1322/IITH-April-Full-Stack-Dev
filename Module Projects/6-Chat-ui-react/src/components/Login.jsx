import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="card" style={{ width: "30rem" }}>
        <img
          src="https://www.digitalsilk.com/wp-content/uploads/2024/04/stock-photos-vs-real-photos-hero-image-760x380.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <Link to="/signup">Don't Have Account ? Create one </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
