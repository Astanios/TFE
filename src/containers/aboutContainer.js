import React from "react";
import { connect } from "react-redux";

class contentContainer extends React.Component {
  render() {
    return (
      <div className="App-about">
        <p>El sitio que está visitando es un sistema desarrollado en JavaScript, con las librerías React y Redux que tiene la funcionalidad de renderizar los documentos HTML que son proporcionados por una API de un sistema desarrollado con el framework Django de Python, la idea es que este se comunique con el módulo de almacenamiento así como con el módulo de indexación. el cual es una instalación de SolrCloud interactuando con otro sistema de Hadoop</p>
        <p>La información recibida es luego procesada en este sistema a través de un módulo de NPM llamado React-render-html </p>
        <p>En un aspecto académico, el propósito de ésto es que haga la función de módulo de acceso para el primer Archivo Web de Venezuela</p>
        <p>Este módulo es el Trabajo Especial de Grado del Br. Luis Daniel Cartillo y el Archivo Web es a su vez la tesis doctoral de Mercy Ospina</p>
        
      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {};

export default connect(mS, mD)(contentContainer);