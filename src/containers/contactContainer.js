import React from "react";
import { connect } from "react-redux";

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="App-contact">
        <div className="App-contact App-text">
          <h1 className="App-title">Contáctanos</h1>
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Email"/>        
          <textarea rows="4" cols="50" />
        </div>

      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {};

export default connect(mS, mD)(ContactContainer);