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
        <p>
          This company will never use your personal information o any related
          data.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
