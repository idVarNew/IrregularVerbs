import React from "react";
import ColorLink from "../../containers/filters/Colors";


const ColorFilter = (props) => {

  const colors = {
    col1: {
      code: "#ff5722",
      colorName: "Red",
      description: "Not at all"
    },
    col2: {
      code: "#ecbf84",
      colorName: "Orange",

      description: "Not sure"
    },
    col3: {
      code: "#ece084",
      colorName: "Yellow",
      description: "So-so"
    },
    col4: {
      code: "#bdda9c",
      colorName: "Green",
      description: "I know it"
    },
    col5: {
      code: "#ffffff",
      colorName: "White",
      description: "remove color"
    },
  }


  return (
    <div className="color-filter">
      <span className="color-filter__text"> Show:</span>
      {" "}
      <ColorLink filterName="SHOW_ALL" color={colors.col5.code}>
        All
       </ColorLink>
    
      <ColorLink filterName="SHOW_RED" color={colors.col1.code}>
        Red
         </ColorLink>
 
      <ColorLink filterName="SHOW_ORANGE"  color={colors.col2.code}>
        Orange
         </ColorLink>
  
      <ColorLink filterName="SHOW_YELLOW" color={colors.col3.code}>
        Yellow
         </ColorLink>
      <ColorLink filterName="SHOW_GREEN" color={colors.col4.code}>
        Green
         </ColorLink>

    
    </div>
  );
}


export default ColorFilter;
