import { Link } from "react-router-dom";
import "../Signup/Signupform.css";

function Signupform() {
  return (
    <div className="form">
      <form>
        <div className="mail">
          <label>EMAIL OR PHONE NUMBER OR USERNAME</label>
          <input type="email"></input>
        </div>
        <div className="password">
          <label>PASSWORD</label>
          <input type="password"></input>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
        <div className="login">
          <span>Need an account?</span>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#318ce7" }}
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signupform;
