import React from "react";
import myMsg from "./Input";

function Greet(props) {
  // console.log(props.greet);
  return (
    <div>
      <h1>Hello {props.greet}</h1>
    </div>
  );
}

export default Greet;
