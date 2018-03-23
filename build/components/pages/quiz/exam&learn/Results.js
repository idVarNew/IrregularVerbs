import React from "react";
import PropTypes from "prop-types";

const Results = (props) => {

  let results = "";
  const correctAnswer = props.correctAnswers,
    verbsInCurrentLevel = props.verbsInCurrentLevel;


  if (correctAnswer === verbsInCurrentLevel) {
    results = `Correct answers: ${correctAnswer} / ${verbsInCurrentLevel}. Great.`;
  } else if (correctAnswer >= (Math.floor(verbsInCurrentLevel / 2)) && correctAnswer < verbsInCurrentLevel && correctAnswer !== 0) {
    results = `Correct answers: ${correctAnswer} / ${verbsInCurrentLevel}. Good`;
  } else if (correctAnswer < (Math.floor(verbsInCurrentLevel / 2)) && correctAnswer > 0) {
    results = `Correct answers: ${correctAnswer} / ${verbsInCurrentLevel}. So-so. You need more practice`;
  } else if (correctAnswer === 0) {
    results = `Correct answers: ${correctAnswer} / ${verbsInCurrentLevel}. It's bad. First learn then practice!`;
  }

  return (
    <div className="test-summary__results">
      {results}
    </div>
  );
}

export default Results;

Results.propTypes = {
  verbsInCurrentLevel: PropTypes.number,
  correctAnswers: PropTypes.number,
};