import React from "react";
import myMsg from "./Input";

function Greet(props) {
  return (
    <div>
      <h1>Hello {props.greet}!</h1>
    </div>
  );
}

export default Greet;
