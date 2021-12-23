import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function PrivacyPolicy(props) {
  return (
    <div className="signIn">
      <div className="homeIcon">
        <Link to="/">
          <div className="arrowIcon">
            <i id="arrow" class="fas fa-arrow-left"></i>
          </div>
        </Link>
        <Link to="/">
          <img
            className="iconImg"
            src="./Images/globoicon.jpg"
            alt="globoicon"
          />
        </Link>
      </div>
      <h2>Sign in</h2>
      <div className="signInBox">
        <h6>E-mail</h6>
        <input placeholder="username" id="input" type="email" />
        <h6>Password</h6>
        <input placeholder="password" id="input" type="password" />

        <div className="loginDiv">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
