import React from "react";
import { connect } from "react-redux";

//import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../components/searchBar';
import Results from '../components/results';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>AWV</h2>
          <SearchBar />
        </div>
        <div>
          <Results />
        </div>
      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {};

export default connect(mS, mD)(MainContainer);