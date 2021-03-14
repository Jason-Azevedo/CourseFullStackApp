import React, { useState } from "react";

export default function FormInputPass({ htmlFor, inputName, errMsg }) {
  const [inputType, setInputType] = useState("password");

  const updateInputType = () => {
    const type = inputType === "password" ? "text" : "password";
    setInputType(type);
  };

  return (
    <>
      <label className="label" htmlFor={inputName}>
        {htmlFor}
      </label>
      <div className="input--pass-container">
        <input className="input" name={inputName} type={inputType} />
        <div
          className="input--pass-eye"
          onClick={() => updateInputType()}
        ></div>
      </div>
      <span className="input--error-msg">{errMsg}</span>
    </>
  );
}
