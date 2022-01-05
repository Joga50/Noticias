import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function ContactUs(props) {
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
        <p className="paragraph">Please contact Us to:</p>
        <p>-globonews@gmail.com</p>
        <p>-tel: 111111111</p>
      </div>
    </div>
  );
}

export default ContactUs;
