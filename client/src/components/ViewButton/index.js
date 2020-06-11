import React from "react";
import "./style.css";


function ViewButton(props) {
  return (
    <a {...props} target="_blank"
    rel="noopener noreferrer"><button className="view-btn" tabIndex="0">
      View
    </button></a>
  );
}

export default ViewButton;