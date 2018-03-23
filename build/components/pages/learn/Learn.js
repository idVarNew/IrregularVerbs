import React from "react";
import PropTypes from "prop-types";
import Level from "./Level";
import PrevLink from "../../modules/PrevLink";


const Learn = (props) => {
  
  const resetPrevious= () =>{
    props.resetAnswers();
  }

  const getAllCorectAnswers = (level) => {
    const verbsByLevel = props.verbsList.filter((item) => {
      if (item[level] === true || item.level === level) {
        return item.text;
      }
    });
    return verbsByLevel.length;
  }

  return (
    <div className="page learn-page">
      <PrevLink href={"/"}/>
      <h2 className="page__title">Learn</h2>
      <div className="levels">
        <h3 className="levels__title">Levels</h3>
        <ul className="levels__list">

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"featured"}
            resetPrevious={resetPrevious}
          />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"beginner"}
            resetPrevious={resetPrevious}
          />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"intermediate"}
            resetPrevious={resetPrevious}
          />

          <Level
            getAllCorectAnswers={getAllCorectAnswers}
            level={"advanced"}
            resetPrevious={resetPrevious}
          />

        </ul>
      </div>
    </div>
  );
}

export default Learn;

Learn.propTypes = {
  verbsList: PropTypes.arrayOf(PropTypes.object),
  resetAnswers: PropTypes.func
};