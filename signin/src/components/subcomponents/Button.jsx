import React, { useState } from "react";

function Button(props) {
  const [btnColor, setHoverIn] = useState("white");

  const myColor = {
    backgroundColor: btnColor,
  };

  function onHoverIn() {
    setHoverIn("black");
  }

  function onHoverOut() {
    setHoverIn("white");
  }

  return (
    <div>
      <button
        onMouseOver={onHoverIn}
        onMouseOut={onHoverOut}
        style={myColor}
        id="btn"
        type={props.submit}
      >
        {props.btnTxt}
      </button>
    </div>
  );
}

export default Button;
