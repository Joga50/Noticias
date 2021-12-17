import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";
import axios from "axios";
import { useEffect } from "react";
import Articulo from "../Main/Articulo";

function Mexico(props) {
  const { data, setData } = props;
  const API =
    "https://newsapi.org/v2/top-headlines?country=mx&apiKey=ce69a11780e94afb8afc57104429d6c9";
  useEffect(() => {
    axios
      .get(API)
      .then((data) => setData(data.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Mexico
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>
        {data.map((articulo) => (
          <Articulo data={articulo} />
        ))}
      </div>
    </div>
  );
}

export default Mexico;
