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

const Exam = (props) => {

  const verbsList = props.verbsList,
    index = props.state.index,
    verbsInCurrentLevel = props.verbsInCurrentLevel.length,
    currentVerb = props.shuffledVerbs[index];

  return (
    <Fragment>
      <header className="page__header">
      <PrevLink href={"/exam"}/>
       

        <div className="page__header-row">
          <h2 className="page__title">Exam</h2>
          <Progress
            currentQuestionIndex={index}
            verbsInCurrentLevel={verbsInCurrentLevel}
          />
        </div>

      </header>

      <article className="question">

        <CurrentVerb currentVerb={currentVerb} />

        <form className="question__form">
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
              currentVerb={currentVerb}
              verbsList={verbsList}
              isCorrect={props.isCorrect}
              correctVersion={props.correctVersion}
            />
            {(index + 1 === verbsInCurrentLevel) ? (
              <Summary
                verbsList={verbsList}
                verbsInCurrentLevel={verbsInCurrentLevel}
                page={props.page}
                correctAnswers={props.correctAnswers}
              />
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

export default Exam;

Exam.propTypes = {
  question: PropTypes.string,
  inputValue: PropTypes.string,
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