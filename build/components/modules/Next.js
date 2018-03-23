import React from "react";
import { Link } from "react-router"
import PropTypes from "prop-types";

const Next = (props) => {

  let nextIndex,
    i = props.verbsDetails.findIndex((item) => {
      return item === props.params;
    })

  if (i < (props.verbsDetails.length - 1)) {
    nextIndex = i + 1;
  } else {
    nextIndex = 0;
  }

  return (
    <Link
      to={`/${props.verbsDetails[nextIndex]}`}
      className="c-link c-link_next"
    >
      Next
   </Link>
  );
}

export default Next;

Next.propTypes = {
  verbsDetails: PropTypes.arrayOf(PropTypes.string),
  params: PropTypes.string
};