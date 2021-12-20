import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Register(props) {
  return (
    <div className="signIn">
      <div className="homeIcon">
        <Link to="/">
          <img
            className="iconImg"
            src="./Images/globoicon.jpg"
            alt="globoicon"
          />
        </Link>
      </div>
      <h2>Register</h2>
      <div className="signInBox">
        <h6>E-mail</h6>
        <input placeholder="username" id="input" type="email" />
        <h6>Password</h6>
        <input placeholder="password" id="input" type="password" />
        <h6>Confirm password</h6>
        <input placeholder="password" id="input" type="password" />
        <div className="loginDiv">
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
