import { Router, Route, Switch } from "react-router-dom";
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
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={"/home"} component={App} exact={true}></Route>
          <Route path={"/signup"} component={Signupbox}></Route>
          <Route path={"/login"} component={Loginbox}></Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
