import React from "react";
import Button from "../subcomponents/Button";
import Input from "../subcomponents/Input";

function Register() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit" btnTxt="Register" />
      </form>
    </div>
  );
}

export default Register;
