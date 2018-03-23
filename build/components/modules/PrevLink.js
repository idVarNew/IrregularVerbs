import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

const PrevLink = (props) => {

  return (
    <Link
      to={props.href}
      className="prev-link"
    >
      &#8678;  Back
    </Link>
  );
};

export default PrevLink;


PrevLink.propTypes = {
  href: PropTypes.string
};