import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CheckAnswerButton from "./CheckAnswer";

const Buttons = (props) => (

  <Fragment>
    {(props.state.isEmpty === false && props.state.inputValue !== "")
      ? (<CheckAnswerButton
        state={props.state}
        checkAnswer={props.checkAnswer}
        isQuestionChange={props.isQuestionChange}
      />)
      : <button
        className="c-button c-button_check" disabled>
        ?
        </button>
    }
  </Fragment>
);


export default Buttons;

Buttons.propTypes = {
  state: PropTypes.object,
  checkAnswer: PropTypes.func,
  isQuestionChange: PropTypes.func
};