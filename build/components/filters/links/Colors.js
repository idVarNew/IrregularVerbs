import React from "react";
import PropTypes from "prop-types";

const ColorFilterLink = (props) => {

  const handleFiltrByColor = (event) => {
    event.preventDefault();
    props.filtrByColor();
  }

  return (
    <a 
    href="#" 
    className="color-filter__link"
    onClick={handleFiltrByColor}
    style={{backgroundColor: props.color}}
    >
      {props.children}
    </a>
  )
};

export default ColorFilterLink;

ColorFilterLink.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};