import React from "react";

function Button(props) {
  return (
    <div>
      <button type={props.submit}>{props.btnTxt}</button>
    </div>
  );
}

export default Button;
