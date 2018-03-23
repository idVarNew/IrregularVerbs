import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const Version = (props) => {

  let versionName;

  if (props.versionName === "infinitive") {
    versionName = "Infinite"
  } else if (props.versionName === "pastSimple") {
    versionName = "Past Simple"
  } else if (props.versionName === "pastParticiple") {
    versionName = "Past Participle"
  }

  return (
    <li className="correct-versions__item">
      <span className="versions-list__version-name">{versionName}:</span> {" "}
      {(typeof props.version === "string") ? (
        <span className="verb__version">
          <Item
            version={props.version}
            addSound={props.addSound}
            versionName={props.versionName}
          />
        </span>
      ) : (
          <span className="verb__version-wrapper">
            {props.version.map((item, index) => {
              return (
                <span key={index} className="verb__version">
                  <Item
                    version={item}
                    addSound={props.addSound}
                    versionName={props.versionName}
                  />
                </span>
              )
            })}
          </span>
        )}
    </li>

  );
}

export default Version;

Version.propTypes = {
  addSound: PropTypes.func,
  version: PropTypes.string,
};