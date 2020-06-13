import React from "react";
import "./style.css";


function SaveButton(props) {
  return (
    <button className="save-btn"><span {...props} role="button" tabIndex="0">
      Save Book
    </span></button>
  );
}

export default SaveButton;