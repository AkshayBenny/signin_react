import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";

function Form(props) {
  return (
    <div>
      <div className="container">
        {props.isRegistered ? <Register /> : <Login />}
      </div>
    </div>
  );
}

export default Form;
