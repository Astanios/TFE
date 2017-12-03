import React from "react";
import { connect } from "react-redux";

class contentContainer extends React.Component {
  render() {
    return (
      <div>
        <p>About Container</p>
      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {};

export default connect(mS, mD)(contentContainer);