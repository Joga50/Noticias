import React from "react";

function Articulo(props) {
  const { data } = props;
  return (
    <div className="carta">
      <img className="img" src={data.urlToImage} alt="Italian Trulli"></img>
      <h4>{data.title}</h4>

      <h6>{data.description}</h6>
      <h5>{`Escrito por: ${data.author}, Publicado en: ${data.publishedAt}`}</h5>

      <h5>{`Contenido: ${data.content}`}</h5>
      <button>Reservar</button>
    </div>
  );
}

export default Articulo;
