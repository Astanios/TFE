import React from 'react';
import { connect } from "react-redux";
import renderHTML from 'react-render-html';

import { update } from '../reducers/resultsReducer';

class Results extends React.Component{

    createMarkup(){ 
      return {__html: this.props.content};
    }

    
    render(){
        const {
            query
        } = this.props;
        return(
          <div>

                <div dangerouslySetInnerHTML={this.createMarkup()} >
                </div>

          </div>
        )
    }
}

const mS = state => {
  return {
    query: state.results.query,
    content: state.results.content,
    showExternalHTML: state.results.showExternalHTML    
  };
};

const mD = {
  update
};

export default connect(mS, mD)(Results);