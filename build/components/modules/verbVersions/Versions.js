import React from "react";
import PropTypes from "prop-types";
import Version from "./Version";

const Versions = (props) => {

  const verb = props.verb;
console.log(verb.infinitive)
  return (
    <ul className="correct-versions">
   
        <Version
          addSound={props.addSound}
          version={verb.infinitive}
          versionName={Object.keys(props.verb)[0]}
        />
     
        <Version
          addSound={props.addSound}
          version={verb.pastSimple}
          versionName={Object.keys(props.verb)[1]}
        />
     
        <Version
          addSound={props.addSound}
          version={verb.pastParticiple}
          versionName={Object.keys(props.verb)[2]}
        />
   
    </ul>
  );
}

export default Versions;

Versions.propTypes ={
  addSound: PropTypes.func,
  infinitive: PropTypes.string,
  verb: PropTypes.object
}
