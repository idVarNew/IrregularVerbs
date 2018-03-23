import React from "react";
import PropTypes from "prop-types";
import ColorSettings from "./colorSettings/ColorSettings";
import Examples from "./Examples";
import PrevLink from "../../modules/PrevLink";
import Versions from "../../modules/verbVersions/Versions";
import Next from "../../modules/Next"


const SingleVerb = (props) => {

  const verb = props.verbsDetails.byId[props.params.text];

  let i = props.verbsDetails.allIds.findIndex((item) => {
    return item === props.params.text;
  });

  const verbInList = props.verbsList[i];

  const addSound = (event) => {
    if (event.target.classList.contains("c-button_sound")) {
      const verb = event.target.attributes.getNamedItem("data-verb-version").value
      const msg = new SpeechSynthesisUtterance(verb);
      msg.lang = 'en-GB';
      window.speechSynthesis.speak(msg);
    }
  };

  const setColor = (event) => {
    if (event.target.classList.contains("c-button_color-settings")) {
      props.changeColor(event.target.attributes.getNamedItem("data-color").value, i);
    }
  };

  const pageStyle = {
    borderColor: verbInList.color, borderWidth: "5px", borderStyle: "solid"
  }

  return (
    <div style={pageStyle} className="page single-page">
     
      <PrevLink href={"/explore"} />


      <h2 className="page__title">{props.params.text}</h2>

    <Versions
        verb={verb}
        addSound={addSound}
      />
    
      <Examples
        verb={verb}
      />

      <ColorSettings
        setColor={setColor}
      />
      <Next
        verbsDetails={props.verbsDetails.allIds}
        params={props.params.text}
      />


    </div>
  );
};

export default SingleVerb;


SingleVerb.propTypes = {
  changeColor: PropTypes.func,
  params: PropTypes.object,
  verbsList: PropTypes.arrayOf(PropTypes.object),
  verbsDetails: PropTypes.object,
};
