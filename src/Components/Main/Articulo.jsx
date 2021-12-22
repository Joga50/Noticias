import React from "react";

function Articulo(props) {
  const { data } = props;
  return (
    <div className="carta">
      <hr></hr>
      <h2>{data.title}</h2>
      <img className="img" src={data.urlToImage} alt="Italian Trulli"></img>

      <h6 className="descriptionCard">{data.description}</h6>
      <h3 className="content">{`Contenido: ${data.content}`}</h3>
      <h6 className="writtenBy">{`Escrito por: ${data.author}, Publicado en: ${data.publishedAt}`}</h6>

      <hr></hr>
    </div>
  );
}

export default Articulo;
