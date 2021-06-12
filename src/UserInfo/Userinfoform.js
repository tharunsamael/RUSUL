import "./Userinfoform.css";

function Userinfoform() {
  return (
    <div className="form">
      <form>
        <div className="rform">
          <div className="rname">
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className="ruser">
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className="rphno">
            <label>Phone Number</label>
            <input type="tel"></input>
          </div>
          <div className="gmail">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="gender">
            <label>Gender</label>
            <input type="text" list="gender" />
            <datalist id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
              <option>prefer not to say</option>
            </datalist>
          </div>
          <div className="bio">
            <label>Bio</label>
            <textarea type="text" />
          </div>
          <div className="rsubmit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Userinfoform;
