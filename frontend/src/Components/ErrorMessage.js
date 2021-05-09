import React from "react";
import ValidateInput from "../Utils/ValidateInput";

// Returns the p tag if the err message is not empty
export default function ErrorMessage({ err }) {
  if (ValidateInput(err, { notEmpty: true }))
    return <p className="error-message">{err}</p>;

  return <> </>;
}
