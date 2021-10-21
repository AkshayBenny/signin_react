import React from "react";
import Button from "./login_components/Button";
import Password from "./login_components/Password";
import Username from "./login_components/Username";

function Login() {
  return (
    <div>
      <form className="form">
        <Username />
        <Password />
        <Button />
      </form>
    </div>
  );
}

export default Login;
