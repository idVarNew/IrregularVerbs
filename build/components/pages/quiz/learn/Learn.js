import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PrevLink from "../../../modules/PrevLink";
import Progress from "../exam&learn/Progress";
import CurrentVerb from "../exam&learn/CurrentVerb";
import Answer from "../exam&learn/Answer";
import NextQuestion from "../exam&learn/NextQuestion";
import Results from "../exam&learn/Results";
import CheckAnswerToggle from "../exam&learn/checkAnswerButtons/CheckAnswerToggle";
import Summary from "../exam&learn/Summary";
import Input from "../exam&learn/Input";
import AnswersCounter from "../exam&learn/AnswersCounter"
import Versions from "../../../modules/verbVersions/Versions"

const Learn = (props) => {

  return (
    <Fragment>
      <header className="page__header">
        <PrevLink href={"/learn"} />

        <h2 className="page__title">Learn</h2>

        <AnswersCounter
          verbsList={props.verbsList}
        />

        All verbs: {props.verbsInCurrentLevel}

      </header>
      <article className="question">

        <CurrentVerb currentVerb={props.currentVerb} />
        <form>
          <Input
            placeholder={props.question}
            onInputChange={props.onInputChange}
            inputValue={props.state.inputValue}
          />

          <CheckAnswerToggle
            state={props.state}
            checkAnswer={props.checkAnswer}
            isQuestionChange={props.isQuestionChange}

          />
        </form>
        
        {(props.state.isQuestionChange === true) && (
          <Fragment>
            <Answer
              currentVerb={props.currentVerb}
              isCorrect={props.isCorrect}
              correctVersion={props.correctVersion}
            />

            <Versions
              verb={props.verbDetails}
              addSound={props.addSound}
            />


            {(props.correctAnswers === props.verbsInCurrentLevel) ? (
               <p  className="test-summary">
                   Congratulation. You have learned all verbs! 
              </p>
            ) : (
                <NextQuestion
                  updateIndex={props.updateIndex}
                  clearInput={props.clearInput}
                  setQuestion={props.setQuestion}
                  updateState={props.updateState}
                />
              )}
          </Fragment>
        )}
      </article>
    </Fragment>
  );
}

export default Learn;

Learn.propTypes = {
  question: PropTypes.string,
  inputValue: PropTypes.string,
  correctVersion: PropTypes.string,
  page: PropTypes.string,
  verbsList: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.object,
  shuffledVerbs: PropTypes.arrayOf(PropTypes.string),
  onInputChange: PropTypes.func,
  checkAnswer: PropTypes.func,
  isQuestionChange: PropTypes.func,
  updateIndex: PropTypes.func,
  clearInput: PropTypes.func,
  updateState: PropTypes.func
};