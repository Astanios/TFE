import React from 'react';
import { connect } from "react-redux";

import { update } from "../reducers/resultsReducer";

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
        query: state.results.query        
    };
  };
  
const mD = {
    update
};
  
export default connect(mS, mD)(SearchBar);