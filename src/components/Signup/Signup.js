import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {actionCreators} from "../../ducks/user";
import SignUpForm from "./signupForm";
import Preload from "../Preload/Preload";

class SignUp extends Component {
  submit = values => {
    this.props.reg(values);
  };

  render() {
    if (this.props.user.token === null) {
      if (this.props.user.signup.fetching) {
        return <Preload />;
      }
      return (
        <div className="row">
          <div className="col-md-12">
            <h1>Sign up form</h1>
            {this.props.user.signup.error && <div>{this.props.user.signup.error}</div>}
            <SignUpForm submitFunc={this.submit} />
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reg: bindActionCreators(actionCreators.reg, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
