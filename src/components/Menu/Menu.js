import React from "react";
import {Link} from "react-router-dom";
import Logout from "../Logout/Logout";

import "./menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="navMenu">
        <Link to="/">Sign in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Logout />
      </div>
    );
  }
}
