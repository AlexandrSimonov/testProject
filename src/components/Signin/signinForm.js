import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField, validate} from "../RenderField/RenderField";

const SignInForm = props => {
  const {handleSubmit, submitFunc} = props;
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div className="form-group">
        <div>
          <Field
            name="login"
            type="text"
            label="Email or phone"
            validate={[validate.required, validate.emailOrPhone]}
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
        <button type="submit" className="btn btn-info">
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "signInForm"
})(SignInForm);
