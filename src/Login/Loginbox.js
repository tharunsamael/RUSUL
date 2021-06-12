import React from "react";
import "./Loginbox.css";
import Brandname from "../Signup/Brandname";
import Loginform from "./Loginform";
import bg from "../bg blue.png";

const Loginbox = () => {
  document.body.style.backgroundImage = `url('${bg}')`;

  return (
    <div className="bname">
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
