import React from "react";
import PropTypes from "prop-types";

const ListItemStatus = (props) => {
  let passed;
  const passedVerb = props.verbInList.passed;

  if (passedVerb === true) {
    passed = "\u2611"
  } else if (passedVerb === false) {
    passed = "\u2612"
  } else {
    passed = "\u2610"
  }

  return (
    <span className="verb__passed">{passed}</span>
  );
};

export default ListItemStatus;

ListItemStatus.propTypes = {
  verbInList: PropTypes.object,
};