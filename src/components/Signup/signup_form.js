import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, validate} from "../RenderField/RenderField";

const SignUpForm = props => {
  const {handleSubmit, submitFunc, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div className="form-group">
        <div>
          <Field
            name="name"
            type="text"
            label="Name"
            validate={[validate.required]}
            component={renderField}
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="address"
            component="input"
            type="text"
            placeholder="Address"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="phone"
            component="input"
            type="text"
            placeholder="Phone"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="password_repeat"
            component="input"
            type="password"
            placeholder="Password repeat"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-info">
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "signUpForm"
})(SignUpForm);
