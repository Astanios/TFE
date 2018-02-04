import React from 'react';
import { connect } from "react-redux";

import { update, submit } from "../reducers/resultsReducer";

class SearchBar extends React.Component{

    render(){
        const {
            update
        } = this.props;
        return(
            <div className="searchBar">
                <input
                    type="text"
                    ref="query"
                />
                <input 
                    type = "submit"
                    onClick={() => {
                        this.props.submit(this.refs.query.value);
                        update({
                        query: this.refs.query.value
                        });
                    }}
                />
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
    submit
};
  
export default connect(mS, mD)(SearchBar);