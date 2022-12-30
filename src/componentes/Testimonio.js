import React from "react";
import "../stylesheets/testimonio.css";


function testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/persona1.jpg")}
        alt="Imagen persona 1"
      />

      <div clasname="contenedor-texto">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default testimonio;