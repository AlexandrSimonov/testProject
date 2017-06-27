import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {actionCreators} from "../../ducks/signup";
import SignUpForm from "./signupForm";

class SignUp extends Component {
  submit = values => {
    this.props.reg(values);
  };

  render() {
    if (this.props.user === null) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h1>Sign up form</h1>
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
    user: state.signin.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reg: bindActionCreators(actionCreators.reg, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
