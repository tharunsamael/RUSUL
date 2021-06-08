import React from "react";
import Brandname from "../Signup/Brandname";
import Loginform from "./Loginform";

const Loginbox = () => {
  return (
    <div>
      <div>
        <Brandname />
      </div>
      <div className="outline">
        <div className="login-head">
          <h2>Welcome to Rusul!</h2>
        </div>
        <Loginform />
      </div>
    </div>
  );
};

export default Loginbox;
