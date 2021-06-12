import "./index.css";
import { App } from "./Signup/root";
import React from "react";
import { render } from "react-dom";
import Signupbox from "./Signup/Signupbox";
import Loginbox from "./Login/Loginbox";
import UserInfo from "./UserInfo/UserInfo";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

class Apps extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={"/"} component={App} exact={true}></Route>
          <Route path={"/signup"} component={Signupbox}></Route>
          <Route path={"/login"} component={Loginbox}></Route>
          <Route path={"/user-info"} component={UserInfo} />
        </Switch>
      </Router>
    );
  }
}

render(<Apps />, document.getElementById("root"));
