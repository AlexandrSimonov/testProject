import React from "react";
import components from "../index";

export default class Wrapper extends React.Component {
  render() {
    const {Menu} = components;
    return (
      <div className="container-fluid">
        <Menu />
        {this.props.children}
      </div>
    );
  }
}
