import React from "react";
import Button from "./subcomponents/Button";
import Input from "./subcomponents/Input";

function Form(props) {
  return (
    <div>
      <div className="container">
        <form className="form">
          <Input type="text" placeholder="Username" />
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
