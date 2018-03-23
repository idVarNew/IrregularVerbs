import React, { Fragment, Component } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import Exam from "./exam/Exam";
import Learn from "./learn/Learn";


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.verbsInCurrentLevel = this.getVerbsByLevel();
    this.shuffledVerbs = this.shuffleVerbs();
    this.verbsDetails = this.props.verbsDetails.byId;
    this.setQuestion();
    this.state = {
      index: 0,
      isQuestionChange: false,
      isEmpty: true,
      inputValue: ""
    };
  }

  getVerbsByLevel = () => {

    const verbs = [];

    if (this.props.params.option === "featured") {

      this.props.verbsList.map((item) => {
        if (item.featured === true) {
          verbs.push(item.text);
        }
      });

    } else {

      this.props.verbsList.map((item) => {
        if (item.level === this.props.params.option) {
          verbs.push(item.text);
        }
      });
    }

    return verbs;

  };

  shuffleVerbs = () => {

    const verbs = this.verbsInCurrentLevel.concat([]);
    const shuffledVerbs = [];

    this.verbsInCurrentLevel.forEach((item) => {
      const verbIndex = Math.floor((Math.random() * verbs.length - 1) + 1);
      const verb = verbs[verbIndex];
      shuffledVerbs.push(verb);
      verbs.splice(verbIndex, 1);
    });

    return shuffledVerbs;

  };

  updateIndex = (index) => {

    if (this.state.index < this.shuffledVerbs.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  setQuestion = () => {

    const options = ["pastSimple", "pastParticiple"];
    const optionIndex = Math.floor((Math.random() * options.length - 1) + 1);
    const option = options[optionIndex];
    this.question = option;
  };

  checkAnswerExam = () => {

    const verb = this.verbsDetails[this.shuffledVerbs[this.state.index]],
      i = this.props.verbsDetails.allIds.findIndex((item) => {
        return item === verb.infinitive;
      });

    if (this.state.inputValue !== "") {
      verb[this.question].map((item, index)=>{
        if (this.state.inputValue === verb[this.question][index]) {
          this.props.updateAnswerExam(true, i);
          return;

        } else {
          this.props.updateAnswerExam(false, i);
        }
      });
    }
  };

  checkAnswerLearn = () => {

    const verb = this.verbsDetails[this.shuffledVerbs[this.state.index]],
    
    i = this.props.verbsDetails.allIds.findIndex((item) => {
      return item === verb.infinitive;
    });

    if (this.state.inputValue !== "") {
      verb[this.question].map((item, index)=>{
        if (this.state.inputValue === verb[this.question][index]) {
          this.props.updateAnswerLearn(true, i);
          return;

        } else {
          this.props.updateAnswerLearn(false, i);
        }
      });
    }
  };


  clearInput = () => {
    if (this.state.inputValue !== "") {
      this.setState({ inputValue: "" });
    }
  };

  onInputChange = (event) => {
    this.setState({ isEmpty: false, inputValue: event.target.value });
  };

  updateState = () => {
    this.setState({ isQuestionChange: false, isEmpty: true });
  };

  isQuestionChange = () => {
    this.setState({ isQuestionChange: true });

  };

  addSound = (event) => {
    if (event.target.classList.contains("c-button_sound")) {
      const verb = event.target.attributes.getNamedItem("data-verb-version").value
      const msg = new SpeechSynthesisUtterance(verb);
      window.speechSynthesis.speak(msg);
    }
  };


  resetPreviousResults = () => {
    this.props.resetAnswers();
  }

  render() {

    const verbsList = this.props.verbsList,
      index = this.state.index,
      verbsInCurrentLevel = this.verbsInCurrentLevel.length,
      currentVerb = this.shuffledVerbs[index],
      verbDetails = this.verbsDetails[currentVerb],
      correctVersion = this.verbsDetails[currentVerb][this.question],
      correctAnswersExam = this.props.verbsList.filter((item) => {
        return item.passed === true;
      }).length,
      correctAnswersLearn = this.props.verbsList.filter((item) => {
        return item.learned === true;
      }).length,
      verbLearn = this.props.verbsList.filter((item) => {
        return item.text === currentVerb;
      })[0].learned,
      verbExam = this.props.verbsList.filter((item) => {
        return item.text === currentVerb;
      })[0].passed;


    return (
      <Fragment>

        {(this.props.location.pathname[1] === "l") && (

          <div className="page test test-learn-page">

            <Learn {...this.props}
              state={this.state}
              verbsInCurrentLevel={verbsInCurrentLevel}
              shuffledVerbs={this.shuffledVerbs}
              isQuestionChange={this.isQuestionChange}
              updateState={this.updateState}
              onInputChange={this.onInputChange}
              clearInput={this.clearInput}
              checkAnswer={this.checkAnswerLearn}
              setQuestion={this.setQuestion}
              updateIndex={this.updateIndex}
              getVerbsByLevel={this.getVerbsByLevel}
              question={this.question}
              verbsList={verbsList}
              currentVerb={currentVerb}
              index={index}
              verbDetails={verbDetails}
              correctAnswers={correctAnswersLearn}
              addSound={this.addSound}
              page={"learn"}
              isCorrect={verbLearn}
              reset={this.resetPreviousResults}
              correctVersion={correctVersion}
            />
          </div>

        )}

        {(this.props.location.pathname[1] === "e") && (


          <div className="page test-page test-exam-page">
            <Exam {...this.props}
              state={this.state}
              verbsInCurrentLevel={this.verbsInCurrentLevel}
              shuffledVerbs={this.shuffledVerbs}
              verbsDetails={this.verbsDetails}
              isQuestionChange={this.isQuestionChange}
              updateState={this.updateState}
              onInputChange={this.onInputChange}
              clearInput={this.clearInput}
              checkAnswer={this.checkAnswerExam}
              setQuestion={this.setQuestion}
              updateIndex={this.updateIndex}
              getVerbsByLevel={this.getVerbsByLevel}
              question={this.question}
              verbsList={verbsList}
              currentVerb={currentVerb}
              index={index}
              correctAnswers={correctAnswersExam}
              page={"exam"}
              isCorrect={verbExam}
              correctVersion={correctVersion}
            />
          </div>
        )}
      </Fragment>
    );
  }

};

export default Quiz;


Quiz.propTypes = {
  verbsDetails: PropTypes.arrayOf(PropTypes.object),
  verbsList: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
  params: PropTypes.object,
  updateAnswerExam: PropTypes.func,
  updateAnswerLearn: PropTypes.func,
  resetPreviousResults: PropTypes.func,
  location: PropTypes.object
};
