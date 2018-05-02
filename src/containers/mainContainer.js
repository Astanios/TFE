import React from "react";
import { connect } from "react-redux";

//import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../components/searchBar';
import Results from '../components/results';
import Welcome from '../components/welcome';

class MainContainer extends React.Component {
  render() {
    const {
      welcome 
    } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <SearchBar />
        </div>
        <div>
          {welcome ?
            <Welcome />
          :
            <Results />          
          }
        </div>
      </div>
    );
  }
}

const mS = state => {
  return {
    welcome: state.results.welcome,
  };
};

const mD = {};

export default connect(mS, mD)(MainContainer);