import React from "react";
import "./form.css";

const required = value => value ? undefined : "Required";

const phone = value =>
  value && !/^(0[1-9][0-9]{8})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const password = value =>
  value && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/i.test(value) ? "Invalid password" : undefined;

const emailOrPhone = value => {
  return email(value) === undefined || phone(value) === undefined
    ? undefined
    : "Invalid email or phone number";
};

export const validate = {required, phone, email, password, emailOrPhone};

export const renderField = (
  {
    input,
    label,
    type,
    meta: {touched, error, warning}
  }
) => (
  <div>
    <label>{label}</label>

    {touched &&
      ((error && <div className="alert alert-danger margin_top" role="alert">{error}</div>) ||
        (warning && <div className="alert alert-warn margin_top" role="alert">{warning}</div>))}

    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
    </div>
  </div>
);
