import React from "react";
import {Route, Redirect} from "react-router";
import {connect} from "react-redux";

class AuthRoute extends React.Component {
  render() {
    if (this.props.user === null) {
      return <Redirect to="/" />;
    }
    return <Route name={this.props.name} path={this.props.path} component={this.props.component} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.signin.user
  };
}

export default connect(mapStateToProps)(AuthRoute);
