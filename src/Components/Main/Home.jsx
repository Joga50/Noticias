import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Welcome to the latest world news</h1>
      <h1>Check the country you want to know about</h1>
      <ul>
        <Link to="/USA">
          <h4>
            <nav>U.S.A</nav>
          </h4>
        </Link>
        <Link to="/Mexico">
          <h4>
            <nav>Mexico</nav>
          </h4>
        </Link>
        <Link to="/France">
          <h4>
            <nav>France</nav>
          </h4>
        </Link>
        <Link to="/Portugal">
          <h4>
            <nav>Portugal</nav>
          </h4>
        </Link>
        <Link to="/Colombia">
          <h4>
            <nav>Colombia</nav>
          </h4>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
