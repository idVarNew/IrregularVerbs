import React from "react";
import PropTypes from "prop-types";


const NextQuestion = (props) => (
  <button onClick={() => {
    props.updateIndex();
    props.clearInput();
    props.setQuestion();
    props.updateState()
  }}
    className="c-button c-button_next"
  >
    NEXT
   </button>
);

export default NextQuestion;

NextQuestion.propTypes = {
  updateIndex: PropTypes.func,
  clearInput: PropTypes.func,
  setQuestion: PropTypes.func,
  updateState: PropTypes.func,
};