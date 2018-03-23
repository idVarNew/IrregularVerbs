import React from "react";
import PropTypes from "prop-types";
import Level from "./Level";
import PrevLink from "../../modules/PrevLink";


const Exam = (props) => {

  function getAllCorectAnswers(level) {
    const verbsByLevel = props.verbsList.filter((item) => {
      if (item[level] === true || item.level === level) {
        return item.text;
      }
    });
    return verbsByLevel
  }

  return (
    <div className="page exam-page">
    <PrevLink href={"/"}/>

      <h2 className="page__title">Exam</h2>

      <div className="levels">
        <h3 className="levels__title">Levels</h3>
        <ul className="levels__list">
          <Level
            getAllCorectAnswers={getAllCorectAnswers}
       
            level={"featured"}
          />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"beginner"}
            />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"intermediate"}
            />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"advanced"}
             />
        </ul>
      </div>
    </div>
  );
};

export default Exam;


Exam.propTypes = {
  verbsList: PropTypes.arrayOf(PropTypes.object),
};