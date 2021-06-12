import "./UserInfo.css";
import Userinfoform from "./Userinfoform";
import { useEffect } from "react";

function UserInfo() {
  useEffect(() => {
    document.body.style.backgroundColor = "#6ebebd";
  }, []);
  return (
    <div className="user-info">
      <div className="ice">
        <div className="cream">
          <div className="info">
            <h2>Add your detail and find your pal!</h2>
          </div>
          <Userinfoform />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
