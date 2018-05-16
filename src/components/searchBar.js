import React from 'react';
import { connect } from "react-redux";

import { update, submit, submitjson } from "../reducers/resultsReducer";
import '../App.css';

class SearchBar extends React.Component {

  render() {
    const {
      update,
      mouseDown,
      touchStart,
    } = this.props;
    return (
      <div className="App-bar"
      
      onMouseDown={mouseDown}
      onTouchStart={touchStart}
      >
        <input
          type="text"
          ref="query"
        />
        <button
          type="submit"
          onClick={() => {
            this.props.submitjson({ 'query': this.refs.query.value });
            update({
              query: this.refs.query.value
            });
          }}
          className="App-submit"
        >
          Buscar
        </button>
      </div>
    )
  }
}

const mS = state => {
  return {
    query: state.results.query,
    content: state.results.content,
  };
};

const mD = {
  update,
  submit,
  submitjson,
};

export default connect(mS, mD)(SearchBar);