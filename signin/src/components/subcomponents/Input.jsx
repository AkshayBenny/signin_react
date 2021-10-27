import React, { useState } from "react";

function Input(props) {
  return (
    <div>
      <input
        onChange={props.change}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
