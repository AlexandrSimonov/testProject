import React from "react";
import {Switch} from "react-router-dom";
import {Route} from "react-router";

import AuthRoute from "./components/AuthRoute/AuthRoute";
import components from "./components";

export default class RouterComponent extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={components.Signin} />
        <Route path="/signup" component={components.Signup} />
        <AuthRoute path="/home" component={components.Home} />
        <AuthRoute path="/services" component={components.Services} />
      </Switch>
    );
  }
}
