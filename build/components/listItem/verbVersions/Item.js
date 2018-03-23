import React, { Fragment } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";


const Item = (props) => {
  return (
    <Fragment>
      <Link
        to={`/${props.infinitive}`}
        className="verb__link"
      >
        {props.version}
      </Link>
      <button
        className="c-button c-button_sound"
        onClick={props.addSound}
        data-verb-version={props.version}
      >
        &#9835;
          </button>
    </Fragment>
  );

};

export default Item;

Item.propTypes = {
  version: PropTypes.string,
  infinitive: PropTypes.string,
  addSound: PropTypes.func
};