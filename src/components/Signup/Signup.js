import React, {Component} from "react";
import axios from "axios";
import qs from "qs";
import SignUpForm from "./signup_form";

export default class SignUp extends Component {
  submit = (values, event) => {
    console.log(values);
  };

  render() {
    axios
      .post("http://appwash.equiporojo.cl/api/signup", qs.stringify({}), {
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Sign up form</h1>
          <SignUpForm submitFunc={this.submit} />
        </div>
      </div>
    );
  }
}
