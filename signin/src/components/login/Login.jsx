import React from "react";
import Button from "../subcomponents/Button";
import Input from "../subcomponents/Input";

function Login() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" btnTxt="Login" />
      </form>
    </div>
  );
}

export default Login;
