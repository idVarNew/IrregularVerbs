import React from "react";
import PropTypes from "prop-types";


const FeaturedLink = (props) => (
  <a
    href="#"
    className="featured-filter__link"
    onClick={(event) => {
      event.preventDefault();
      props.filtrByFeatured();
    }} >
    {props.children}
  </a>
);

export default FeaturedLink;

FeaturedLink.propTypes = {
  children: PropTypes.string,
  filtrByFeatured: PropTypes.func
};