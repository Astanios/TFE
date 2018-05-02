import React from 'react';
import { connect } from "react-redux";
import renderHTML from 'react-render-html';

import { update, site } from '../reducers/resultsReducer';

class Results extends React.Component {
  createMarkup() {
    return { __html: this.props.content };
  }
  render() {
    const {
      content,
      site,
      html,
    } = this.props;
    return (
      <div className="App-results">
        <h1>Site: <b>{content.url}</b></h1>
        <h4>Versions: {content.versions}</h4>
        <ul>
          {content.list.map( (version, index) =>
          <li
            className='App-link'
            key={index}
            onClick={() =>
                this.props.site({ 'site_version': version })
            }
          >
            {version}
          </li>
          )}
        </ul>
        <div className='app'>
          {renderHTML(html)}
        </div>
      </div>
    )
  }
}

const mS = state => {
  return {
    html: state.results.html,
    content: state.results.content,
    showExternalHTML: state.results.showExternalHTML
  };
};

const mD = {
  update,
  site
};

export default connect(mS, mD)(Results);

/*
  <div dangerouslySetInnerHTML={this.createMarkup()} >
  </div>
  <div className='app'>
    {renderHTML(this.createMarkup())}
  </div>
*/