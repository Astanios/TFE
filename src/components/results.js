import React from 'react';
import { connect } from "react-redux";
import renderHTML from 'react-render-html';

import { test } from '../requests';

class Results extends React.Component{
    componentWillMount(){
        console.log(test());
    }
    render(){
        const {
            query
        } = this.props;
        return(
            <div className="results">
                {renderHTML(test().data)}
                {
                    query    
                }
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

};

export default connect(mS, mD)(Results);
