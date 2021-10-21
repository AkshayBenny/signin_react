import React from "react";
import Button from "./login_components/Button";
import Input from "./login_components/Input";

function Login() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" />
      </form>
    </div>
  );
}

export default Login;
