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
          <h2>GloboNews</h2>
          <p className="welcomeMessage">
            Hello!, welcome to the world greatsest newspaper. Here you can find
            the latsest news about some of the most importart countries of the
            world.
          </p>
          <hr></hr>
          <img
            className="Bodyimg"
            src="./Images/newspaper.jpg"
            alt="colombiaFlag"
          ></img>
          <hr></hr>
          <div className="firstParagraph">
            <h2>What is this website about</h2>
            <p>
              This website is about the latest and relevant news of some of the
              most important countries around the globe, here you will find an
              enormous quantity of articles about many topics, so preapre to
              enjoy and get information about your favorite country on the list,
              sit down relax and of course, READ!!!
            </p>
            <img
              className="bodyImg2"
              src="./Images/newspaper2.jpg"
              alt="colombiaFlag"
            ></img>
            <hr></hr>
            <h2>Why we chose these countries</h2>
            <p>
              We made a careful and interesting research about which were the
              more important and influent countries on each continent and we
              found a lot of nice and cool countries to talk about, but we
              decided to choose the five more attractive based on stadistics
              polls and research madede thru the net. ;
            </p>
            <img
              className="bodyImg3"
              src="./Images/contactus.jpg"
              alt="contactUs"
            />
            <hr></hr>
            <h2>Contact us</h2>
            <p>
              We will be more than happy if you want to get in touch with us,
              please if you have any question or want to be part of our team, we
              will be more than glad to help you answering all your requests.
              Please contact us
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footerDiv1">
          <img
            className="iconImg"
            src="./Images/globoicon.jpg"
            alt="globoicon"
          />
          <p>
            This website is runned by a well trained team of professional
            researchers, oriented in suggest the best articles to all of our
            lectors. Provided with tons of real time news and well trusted
            sources all around the globe.
          </p>
        </div>
        <div className="footerDiv2">
          <h2>This might interest you</h2>
          <ul>
            <Link to="/aboutUs">
              <li>About us</li>
            </Link>
            <Link to="/privacyPolicy">
              <li>Privacy policy</li>
            </Link>
            <Link to="/FAQ">
              <li>FAQ</li>
            </Link>
            <Link to="/contactUs">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="footerDiv3">
          <h2>Follow us</h2>
          <a href="https://www.twitter.com">
            <img
              id="redes"
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter"
            ></img>
          </a>
          <a href="https://facebook.com">
            <img
              id="redes"
              src="https://img.icons8.com/fluency/48/000000/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="https://instagram.com">
            <img
              id="redes"
              src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
              alt="instagram"
            />
          </a>
          <a href="https://linkedin.com">
            <img
              id="redes"
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </footer>
      <div className="rights">GloboNews 2022. All rights reserved.</div>
    </div>
  );
}

export default Home;
