import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, validate} from "../RenderField/RenderField";

const validationForm = values => {
  const errors = {};

  if (values.password !== values.password_repeat) {
    errors.password = "Password is not equals password repeat";
  }

  return errors;
};

const SignUpForm = props => {
  const {handleSubmit, submitFunc} = props;
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
            type="text"
            label="Address"
            validate={[validate.required]}
            component={renderField}
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="phone"
            type="text"
            label="Phone"
            validate={[validate.required, validate.phone]}
            component={renderField}
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="email"
            type="email"
            label="Email"
            validate={[validate.required, validate.email]}
            component={renderField}
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="password"
            type="password"
            label="Password"
            validate={[validate.required, validate.password]}
            component={renderField}
          />
        </div>
      </div>

      <div className="form-group">
        <div>
          <Field
            name="password_repeat"
            type="password"
            label="Password Repeat"
            validate={[validate.password]}
            component={renderField}
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
  form: "signUpForm",
  validate: validationForm
})(SignUpForm);
