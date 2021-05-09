import React from "react";
import ValidateInput from "../Utils/ValidateInput";

// Returns the p tag if the err message is not empty
export default function ErrorMessage({ error }) {
  if (ValidateInput(error, { notEmpty: true }))
    return <p className="error-message">{error}</p>;

  return <> </>;
}
