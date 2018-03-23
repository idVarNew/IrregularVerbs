import React from "react";
import PropTypes from "prop-types";

const AnswersCounter = (props) => {

  const correctAnswer = props.verbsList.filter((item) => {
    return item.learned === true;
  }).length,

    wrongAnswer = props.verbsList.filter((item) => {
      return item.learned === false;
    }).length;

  return (
    <div className="answers-counter" >
      <span className="answers-counter__correct">Correct answers:  {correctAnswer}</span>
      {" / "}
      <span className="answer-counters__wrong">Wrong answers: {wrongAnswer}</span>
    </div>
  );
}

export default AnswersCounter;


AnswersCounter.propTypes = {
  verbsList: PropTypes.arrayOf(PropTypes.object),
};