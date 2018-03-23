import React, { Fragment } from "react";
import PropTypes from "prop-types";


const Item = (props) => {

  return (
    <Fragment>

      {props.version}
      {"    "}
      <button className="c-button c-button_sound  c-button_single-page-sound"
        onClick={props.addSound}
        data-verb-version={props.version}
      >
        &#9835;    {" "}
       </button>
  
    </Fragment>


  );
}

export default Item;

Item.propTypes = {
  addSound: PropTypes.func,
  version: PropTypes.string,
};