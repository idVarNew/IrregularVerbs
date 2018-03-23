import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import Results from "./Results";
import PrevLink from "../../../modules/PrevLink";

const Summary = (props) => {

 return (
    <div className="test-summary">
     
      <h4 className="test-summary__title">
        Your results:
        </h4>

      <Results 
      verbsList={props.verbsList} 
      verbsInCurrentLevel={props.verbsInCurrentLevel} 
      correctAnswers={props.correctAnswers}
      />
     <PrevLink href={`/${props.page}`}/>     
    </div>
  );
  
}

export default Summary;


Summary.propTypes = {
  verbsInCurrentLevel: PropTypes.number,
  verbsList: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
  correctAnswers: PropTypes.number
};