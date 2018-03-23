import React from "react";
import PropTypes from "prop-types";

const CheckAnswerButton = (props) => (
  <button
    disabled={props.state.isQuestionChange === true}
    className="c-button c-button_check"
    type="submit"
    onClick={() => {
      props.checkAnswer();
      props.isQuestionChange()

    }}>
    CHECK
   
    </button>
);


export default CheckAnswerButton;

CheckAnswerButton.propTypes = {
  checkAnswer: PropTypes.func,
  isQuestionChange: PropTypes.func,
  state: PropTypes.object
};