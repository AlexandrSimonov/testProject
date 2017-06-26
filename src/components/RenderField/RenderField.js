import React from "react";
import "./form.css";

const required = value => value ? undefined : "Required";

export const validate = {required};

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
