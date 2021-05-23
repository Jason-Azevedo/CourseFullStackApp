import React from "react";

// Returns the p tag if the err message is not empty
export default function ErrorMessage({ error }) {
  if (error !== "" && error !== undefined)
    return <p className="error-message">{error}</p>;

  return <> </>;
}
