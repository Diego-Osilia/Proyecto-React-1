import React from "react";
import "../stylesheets/testimonio.css";


function testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/persona1.jpg")}
        alt="Imagen persona 1"
      />

      <div clasname="contenedor-texto">
        <p className="nombre-testimonio">Veronika Zuleta en Reino Unido</p>
        <p className="cargo-testimonio">Diseñadora Digital</p>
        <p className="texto-testimonio">
          "Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but occasionally circumstances
          occur in which toil and pain can procure him some great pleasure"
        </p>
      </div>
    </div>
  );
}

export default testimonio;