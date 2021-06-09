import "./index.css";
import { App } from "./Signup/root";
import React from "react";
import { render } from "react-dom";
import Signupbox from "./Signup/Signupbox";
import Loginbox from "./Login/Loginbox";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

class Apps extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            component={App}
            exact={true}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/signup"}
            component={Signupbox}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/login"}
            component={Loginbox}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

render(<Apps />, document.getElementById("root"));
