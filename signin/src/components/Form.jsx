import React, { useState } from "react";
import Button from "./subcomponents/Button";
import Input from "./subcomponents/Input";
import Greet from "./subcomponents/Greet";

function Form(props) {
  let [msg, setMsg] = useState(" ");

  // console.dir(Input);
  function handleChange(event) {
    setMsg(event.target.value);
  }
  return (
    <div>
      <div className="container">
        <Greet greet={msg} />
        <form className="form">
          <Input type="text" placeholder="Username" change={handleChange} />
          <Input type="password" placeholder="Password" />
          {!props.isRegistered && (
            <Input type="password" placeholder="Confirm Password" />
          )}
          <Button
            type="submit"
            btnTxt={props.isRegistered ? "Login" : "Register"}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
