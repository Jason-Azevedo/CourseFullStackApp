import React from "react";

export default function FormInput({ inputName, errMsg }) {
  return (
    <>
      <label htmlFor={inputName}></label>
      <input name={inputName} type="text" />
      <span>{errMsg}</span>
    </>
  );
}
