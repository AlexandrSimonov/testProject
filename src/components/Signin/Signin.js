import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {actionCreators} from "../../ducks/signin";
import SignInForm from "./signinForm";

class SignIn extends Component {
  submit = (values, event) => {
    this.props.auth(values.login, values.password);
  };

  render() {
    if (this.props.signin.user === null) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h1>Sign in form</h1>
            <SignInForm submitFunc={this.submit} />
          </div>
        </div>
      );
    } else {
      return <Redirect to="/home" />;
    }
  }
}

function mapStateToProps(state) {
  return {
    signin: state.signin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    auth: bindActionCreators(actionCreators.auth, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
