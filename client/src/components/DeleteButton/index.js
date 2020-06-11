import React from "react";
import "./style.css";


function DeleteBtn(props) {
  return (
    <button className="delete-btn"><span {...props} role="button" tabIndex="0">
      Delete from Saved
    </span></button>
  );
}

export default DeleteBtn;