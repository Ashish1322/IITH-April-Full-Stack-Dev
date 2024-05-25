
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Singup</Link>
            </li>
            <li>
              <Link to="/login">Singup</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}