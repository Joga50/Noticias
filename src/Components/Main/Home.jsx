import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="headers">
        <div className="accountManagement">
          <Link to="/signIn">
            <h5>
              <nav>Sign in</nav>
            </h5>
          </Link>
          <div className="verticalSeparator"></div>
          <Link to="/register">
            <h5>
              <nav>Register</nav>
            </h5>
          </Link>
        </div>
        <div className="globoIcon">
          <i class="fas fa-globe-americas"></i>
          <h2 className="homeTittle">GloboNews</h2>
        </div>
        <h1 className="header">Welcome to the latest world news</h1>
        <hr></hr>
        <h1 className="header2">Check the country you want to know about</h1>
        <div className="inputDiv">
          <input placeholder="Buscar..."></input>
          <button>Buscar</button>
        </div>
      </div>
      <div className="contentContainer">
        <div className="homeContainer1">
          <h2>Check our content</h2>
          <ul>
            <li>What is this page about</li>
            <li>Why we choose these countries</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="countriesContainer">
          <ul>
            <Link to="/USA">
              <h4>
                <img
                  className="countryImg"
                  src="./CountryImages/usaFlag.jpg"
                  alt="usaFlag"
                ></img>
                <nav>U.S.A</nav>
              </h4>
            </Link>
            <hr></hr>
            <Link to="/Mexico">
              <h4>
                <img
                  className="countryImg"
                  src="./CountryImages/mexicoFlag.jpg"
                  alt="mexicoFlag"
                ></img>
                <nav>Mexico</nav>
              </h4>
            </Link>
            <hr></hr>
            <Link to="/France">
              <h4>
                <img
                  className="countryImg"
                  src="./CountryImages/franceFlag.jpg"
                  alt="franceFlag"
                ></img>
                <nav>France</nav>
              </h4>
            </Link>
            <hr></hr>
            <Link to="/Portugal">
              <h4>
                <img
                  className="countryImg"
                  src="./CountryImages/portugalFlag.jpg"
                  alt="portugalFlag"
                ></img>
                <nav>Portugal</nav>
              </h4>
            </Link>
            <hr></hr>
            <Link to="/Colombia">
              <h4>
                <nav>
                  <img
                    className="countryImg"
                    src="./CountryImages/colombiaFlag.jpg"
                    alt="colombiaFlag"
                  ></img>
                  Colombia
                </nav>
              </h4>
            </Link>
          </ul>
        </div>
        <div className="homeContainer2">
          <h3 className="welcomeMessage">
            Hello!, welcome to the world greatsest newspaper. Here you can find
            the latsest news about some of the most importart countries of the
            world
          </h3>
          <img
            className="Bodyimg"
            src="./Images/newspaper.jpg"
            alt="colombiaFlag"
          ></img>
        </div>
      </div>
      <footer className="footer">
        <img
          src="https://img.icons8.com/color/48/000000/twitter--v1.png"
          alt="twitter"
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/facebook.png"
          alt="facebook"
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
          alt="instagram"
        />
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="linkedin"
        />
      </footer>
    </div>
  );
}

export default Home;
