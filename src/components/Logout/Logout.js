import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionCreators} from "../../ducks/signin";

class Logout extends React.Component {
  logout() {
    this.props.stateLogout();
  }

  render() {
    if (this.props.signin.user) {
      return <button onClick={this.logout.bind(this)}>Выйти</button>;
    } else {
      return null;
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
    stateLogout: bindActionCreators(actionCreators.logout, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
