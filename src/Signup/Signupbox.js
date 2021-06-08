import "./Signupbox.css";
import Signupform from "./Signupform";
import Brandname from './Brandname';

function Signupbox() {
  return (
    <div>
      <div>
        <Brandname></Brandname>
      </div>
      <div className="outline">
        <div className="sign">
          <h2>Create an account</h2>
        </div>
        <Signupform></Signupform>
      </div>
    </div>
  );
}

export default Signupbox;
