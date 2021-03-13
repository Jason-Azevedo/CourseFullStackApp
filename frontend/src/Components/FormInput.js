import React from "react";

export default function FormInput({ htmlFor, inputName, errMsg }) {
  return (
    <>
      <label className="label" htmlFor={inputName}>
        {htmlFor}
      </label>
      <input className="input" name={inputName} type="text" />
      <span className="input--error-msg">{errMsg}</span>
    </>
  );
}
