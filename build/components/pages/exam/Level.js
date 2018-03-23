import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";


const Level = (props) => {

  const currentResult = props.getAllCorectAnswers(props.level).filter((item) => {
    return item.passed === true
  }).length

  return (
    <li className="levels__item">
      <Link
        to={`/e-test/${props.level}`}
        className="level"
      >
        <h4 className="level__name" >
          {props.level}
        </h4>
        <div className="level__result">
          <span className="level__result-description" >
            Last result:
                </span>
          <span className="level__current-result" >
            {currentResult}
          </span>
          <span className="level__verbs" >
            {"  "} / {props.getAllCorectAnswers(props.level).length}
            {" "}
            verbs
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Level;

Level.propTypes = {
  level: PropTypes.string,
  getAllCorectAnswers: PropTypes.func
};