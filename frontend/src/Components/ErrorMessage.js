import React from "react";

/**
 * An error message component to display error messages 
 * 
 * @returns Paragraph element with error message or empty tags <></>
 */
export default function ErrorMessage({ msg }) {
  if (msg !== "" && msg !== undefined)
    return <p className="error-message">{msg}</p>;

  return <> </>;
}
