import React, {  Fragment } from "react";
import Item from "../../listItem/listItem";
import PropTypes from "prop-types";

const List = (props) => {

  const results = props.listOfVerbs.length === 0 ? "No Results" : "";

  const addSound = (event) => {
    if (event.target.classList.contains("c-button_sound")) {
      let word = event.target.attributes.getNamedItem("data-verb-version").value
      let msg = new SpeechSynthesisUtterance(word);
      msg.lang = 'en-GB';
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <Fragment>
      <ul className="list">
        {"  "}
        {results}

        {props.listOfVerbs.map((item, index, array) => {
          return (
            <Item
              {...props}
              key={index} 
              {...item}
              id={item.id}
              addSound={addSound } 
            />
          );
        }
        )}
      </ul>
    </Fragment>
  );
};

export default List;

List.propTypes  = {
  listOfVerbs: PropTypes.arrayOf(PropTypes.object)
}
