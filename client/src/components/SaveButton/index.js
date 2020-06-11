import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <button className="save-btn"><span {...props} role="button" tabIndex="0">
      Save Book
    </span></button>
  );
}

export default SaveButton;