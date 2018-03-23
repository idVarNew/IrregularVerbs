import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CurrentVerb = (props) => (

  <h3 className="question__title">
    {props.currentVerb}
  </h3>
);

export default CurrentVerb;

CurrentVerb.propTypes = {
  currentVerb: PropTypes.string,
};