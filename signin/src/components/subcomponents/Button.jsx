import React, { useState } from "react";

function Button(props) {
  const [hoverIn, setHoverIn] = useState(false);

  function onHoverIn() {
    setHoverIn(true);
  }

  function onHoverOut() {
    setHoverIn(false);
  }

  return (
    <div>
      <button
        onMouseOver={onHoverIn}
        onMouseOut={onHoverOut}
        style={{ backgroundColor: hoverIn ? "black" : "white" }}
        id="btn"
        type={props.submit}
      >
        {props.btnTxt}
      </button>
    </div>
  );
}

export default Button;
