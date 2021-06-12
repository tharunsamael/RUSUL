import "./Signupbox.css";
import Signupform from "./Signupform";
import Brandname from "./Brandname";
import bg from "../bg blue.png";

function Signupbox() {
  document.body.style.backgroundImage = `url('${bg}')`;
  return (
    <div className="bname">
      <div className="brand">
        <Brandname></Brandname>
      </div>
      <div className="out">
        <div className="outline">
          <div className="sign">
            <h2>Create an account</h2>
          </div>
          <Signupform></Signupform>
        </div>
      </div>
    </div>
  );
}

export default Signupbox;
