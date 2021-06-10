import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signupform.css";

function Signupform() {
  const [usermail, setUsermail] = useState("");
  const [user, setUser] = useState("");

  const mailChangeHandler = (event) => {
    setUsermail(() => event.target.value);
  };

  const userChangeHandler = (event) => {
    setUser(() => event.target.value);
  };

  const submitChangeHandler = (event) => {
    alert(`${usermail} ${user}`);
    event.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={submitChangeHandler}>
        <div className="mail">
          <label>EMAIL</label>
          <input
            type="email"
            value={usermail}
            onChange={mailChangeHandler}
          ></input>
        </div>
        <div className="user">
          <label>USERNAME</label>
          <input type="text" value={user} onChange={userChangeHandler}></input>
        </div>
        <div className="password">
          <label>PASSWORD</label>
          <input type="password"></input>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
        <div className="login">
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "#0873c9" }}
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signupform;
