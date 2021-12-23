import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs(props) {
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
      <h2>About Us</h2>
      <div className="aboutUsP">
        <p className="paragraph">
          Hello you can know more about us in the page, as we mentioned
          previously in the home page we are a website that carries a lot of
          news and articles for a lot of countries, we are a descentralized
          newspaper, with headquerters areound the cloud, so down and enojy
          reading all of our information.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
