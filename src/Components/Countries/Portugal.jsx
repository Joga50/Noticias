import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";
import axios from "axios";
import { useEffect } from "react";
import Articulo from "../Main/Articulo";

function Portugal(props) {
  const { data, setData } = props;
  const API =
    "https://newsapi.org/v2/top-headlines?country=pt&apiKey=ce69a11780e94afb8afc57104429d6c9";
  useEffect(() => {
    axios
      .get(API)
      .then((data) => setData(data.data.articles))
      .catch((err) => console.log(err));
  }, [setData]);
  return (
    <div>
      <div id="navBarDiv">
        <div id="homeIcon">
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
        <hr></hr>
        <div className="tittleDiv">
          <h1 className="countryHeader">
            Check out the best news from Portugal
          </h1>
        </div>
      </div>
      <div>
        {data.map((articulo) => (
          <Articulo data={articulo} />
        ))}
      </div>
    </div>
  );
}

export default Portugal;
