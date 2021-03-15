import React, { useState } from "react";

export default function FormInputPass({ htmlFor, inputName, errMsg }) {
  const [inputType, setInputType] = useState("password");
  const [showEye, toggleEye] = useState("");

  const updateInputType = () => {
    setInputType(inputType === "text" ? "password" : "text");
    toggleEye(showEye === "active" ? "" : "active");
  };

  return (
    <>
      <label className="label" htmlFor={inputName}>
        {htmlFor}
      </label>
      <div className="input--pass-container">
        <input className="input" name={inputName} type={inputType} />
        <div
          className={"icon--container " + showEye}
          onClick={() => updateInputType()}
        >
          <span className="icon--eye"></span>
        </div>
      </div>
      <span className="input--error-msg">{errMsg}</span>
    </>
  );
}
