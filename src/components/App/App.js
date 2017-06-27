import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {actionCreators} from "../../ducks/signin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.initUser();
  }

  render() {
    return this.props.children;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initUser: bindActionCreators(actionCreators.initUser, dispatch)
  };
}

export default connect(() => ({}), mapDispatchToProps)(App);
