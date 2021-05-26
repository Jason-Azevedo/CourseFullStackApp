import React from "react";

/**
 * Simple error message component
 * @param {string} error The error message to display
 * @returns Either error message or empty tages <></>
 */
export default function ErrorMessage({ error }) {
  if (error !== "" && error !== undefined)
    return <p className="error-message">{error}</p>;

  return <> </>;
}
