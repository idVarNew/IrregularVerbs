import React from "react";
import PropTypes from "prop-types";


const Color = (props) => {

  let style;

  if (props.colorCode === "#ffffff") {
    style = { backgroundColor: props.colorCode, border: "1px solid #dddddd" }
  } else {
    style = { backgroundColor: props.colorCode, border: "0px solid #dddddd" }
  }

  return (
    <li className="color-settings__item">
      <button
        className="c-button c-button_color-settings"
        onClick={props.setColor}
        data-color={props.colorCode}
        style={style}
      >
        {props.colorName}
      </button>
      <span className="color-settings__description">{props.description}</span>
    </li>
  );
}

export default Color;
/*
Color.propTypes = {
  setColor: PropTypes.func,
  colorCode: PropTypes.string,
  description: PropTypes.string,
  colorName: PropTypes.string
};
*/