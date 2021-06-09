import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render } from "react-dom";
import "./index.css";
import { App } from "./Signup/root";
import Signupbox from "./Signup/Signupbox";
import Loginbox from "./Login/Loginbox";
import React from "react";

class Apps extends React.Component {
  render() {
    return (
      <HashRouter basename="/" history={createBrowserHistory() 
        <Switch
          <Route path={"/"} component={App} exact={true} />
          <Route path={"/signup"} component={Signupbox} />
          <Route path={"/login"} component={Loginbox} />
        />
      />
    );
  }
}

render(<Apps />, document.getElementById("root"));
