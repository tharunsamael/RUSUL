import React from "react";
import "./Loginbox.css";
import Brandname from "../Signup/Brandname";
import Loginform from "./Loginform";

const Loginbox = () => {
  return (
    <div>
      <div className="brand">
        <Brandname />
      </div>
      <div className="in">
        <div className="inline">
          <div className="login-head">
            <h2>Welcome to Rusul!</h2>
          </div>
          <Loginform />
        </div>
      </div>
    </div>
  );
};

export default Loginbox;
