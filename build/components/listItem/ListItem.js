import React from "react";
import PropTypes from "prop-types";
import ListItemVersion from "./verbVersions/Version";
import ListItemStatus from "./ListItemStatus";


const ListItem = (props) => {

  let buttonText;
  const verb = props.verbsDetails.byId[props.text];
  const verbInList = props.listOfVerbs.find((item) => {
    return item.text === props.text;
  });
  const featuredColor = "red";
  const featuredVerb = {
    color: props.featured ? featuredColor : "#000"
  };
  const handeSetFeaturedVerb = () => {
    props.setFeaturedVerb(props.id);
  }

  if (props.featured) {
    buttonText = "\u2731";
  } else {
    buttonText = "\u268A";
  }

  return (
    <li
      style={{ backgroundColor: props.color }}
      className="list__item"
    >
      <ListItemVersion
        addSound={props.addSound}
        infinitive={verb.infinitive}
        version={verb.infinitive}
      />
      <ListItemVersion
        addSound={props.addSound}
        infinitive={verb.infinitive}
        version={verb.pastSimple}
      />
      <ListItemVersion
        addSound={props.addSound}
        infinitive={verb.infinitive}
        version={verb.pastParticiple}
      />

      <button onClick={handeSetFeaturedVerb} style={featuredVerb} className="c-button c-button_featured">{buttonText}</button>
      <ListItemStatus verbInList={verbInList} />

    </li>
  );
}


export default ListItem;

ListItem.propTypes = {
  text: PropTypes.string,
  featured: PropTypes.bool,
  color: PropTypes.string,
  id: PropTypes.number,
  listOfVerbs: PropTypes.arrayOf(PropTypes.object),
  verbsDetails: PropTypes.object,
  setFeaturedVerb: PropTypes.func
};