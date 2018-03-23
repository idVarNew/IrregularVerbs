import React from "react";
import PropTypes from "prop-types";

const Examples = (props) => (
  
  <div className="examples">
  <h3 className="examples__title">Examples of use</h3>
    {props.verb.examples.map((item, index) => {
      return (<p 
        key={index}
        className="examples__sentence"
        >
        {item}
        </p>
        )
    })}
  </div>
);

export default Examples;

Examples.propTypes = {
  verb: PropTypes.object,
};