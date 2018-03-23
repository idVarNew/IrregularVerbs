import React from "react";
import PropTypes from "prop-types";

const Progress = (props) => {

  const currentQuestionIndex = props.currentQuestionIndex + 1,
    verbsInCurrentLevel = props.verbsInCurrentLevel;

  return (
    <div className="test-progress">
      <span className="test-progress__index">  {`${currentQuestionIndex}`} </span> /
      <span className="test-progress__length"> {`${verbsInCurrentLevel}`}</span>
    </div>
  );
}

export default Progress;

Progress.propTypes = {
  currentQuestionIndex: PropTypes.number,
  verbsInCurrentLevel: PropTypes.number
};