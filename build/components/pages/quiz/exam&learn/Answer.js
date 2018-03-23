import React from "react";
import PropTypes from "prop-types";

const Answer = (props) => {

  return (
    <div className="answer">
      {(props.isCorrect === true)
        ? (
          <span className="answer__text answer__text_correct">
            <b> This was correct answer!</b>
          </span>
        )
        : (
          <span className="answer__text answer__text_wrong">
            <b>Wrong answer!</b> Correct: {" "}
            {props.correctVersion.map((item, index) => {
              return (
                <span key={index}>{item}{" "}</span>
              )
            })}
          </span>

        )}
    </div>
  );
}

export default Answer;

Answer.propTypes = {
  isCorrect: PropTypes.bool,
  correctVersion: PropTypes.arrayOf(PropTypes.object),
};