import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="headers">
        <h1 className="header">Welcome to the latest world news</h1>
        <hr></hr>
        <h1 className="header2">Check the country you want to know about</h1>
        <div className="inputDiv">
          <input placeholder="Buscar..."></input>
          <button>Buscar</button>
        </div>
      </div>
      <div className="contentContainer">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
