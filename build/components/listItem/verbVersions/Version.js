import React, { Fragment } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import Item from "./Item";


const Version= (props) => {

  return (
    <span className="verb">
      {(typeof props.version === "string") ? (
        <Item
          infinitive={props.infinitive}
          addSound={props.addSound}
          version={props.version}
        />
      ) : (
          props.version.map((item, index) => {
            return (
              <span key={index} className="verb__version">
                <Item
                  infinitive={props.infinitive}
                  addSound={props.addSound}
                  version={item}
                />
              </span>
            )
          })
        )}
    </span>
  );
};

export default Version;

Version.propTypes = {
  version: PropTypes.string,
  infinitive: PropTypes.string,
  addSound: PropTypes.func
};