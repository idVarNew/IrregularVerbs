import React from "react";
import PrevLink from "../modules/PrevLink";
import PropTypes from "prop-types";

const Results = (props) => {

  const score = props.verbsList.filter((item) => {
    return item.passed === true
  }).length

  return (
    <div className="page results-page">
      <PrevLink href={"/"} />
      <h2 className="page__title">Results</h2>

      <article className="results">
        <h3 className="results_text">You currently know:</h3>
        {(score === 1) ? (
          <p className="results_score">{`${score} irregular verb.`}</p>
        ) : (
            <p className="results_score">{`${score} irregular verbs.`}</p>
          )
        }
      </article>
    </div>
  );
}

export default Results;

Results.propTypes = {
  verbsList: PropTypes.arrayOf(PropTypes.object),
};

