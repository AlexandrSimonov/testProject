import React from "react";
import {Switch, BrowserRouter} from "react-router-dom";
import {Route} from "react-router";

import components from "./components";

export default class RouterComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={components.App} />
          <Route path="/signin" component={components.Signin} />
          <Route path="/signup" component={components.Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}
