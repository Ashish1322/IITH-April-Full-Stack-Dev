import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const { signup } = useContext(AuthContext);

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
          <h5 className="card-title">Signup</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signup(name, email, password, gender);
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                required
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setGender(e.currentTarget.value)}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="submit" className="btn btn-primary">
                Signup
              </button>

              <Link to="/login">Already Have an Account ? Login now </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
