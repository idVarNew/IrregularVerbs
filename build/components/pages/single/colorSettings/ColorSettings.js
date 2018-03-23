import React from "react";
import PropTypes from "prop-types";
import Color from "./Color";


const ColorsList = (props) => {

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
        <div className="color-settings">
            <h3 className="color-settings__title">How well you know this verb?</h3>
            <ul className="color-settings__list">
                <Color
                    setColor={props.setColor}
                    colorCode={colors.col1.code}
                    colorName={colors.col1.colorName}
                    description={colors.col1.description}
                />

                <Color
                    setColor={props.setColor}
                    colorCode={colors.col2.code}
                    colorName={colors.col2.colorName}
                    description={colors.col2.description}
                />

                <Color
                    setColor={props.setColor}
                    colorCode={colors.col3.code}
                    colorName={colors.col3.colorName}
                    description={colors.col3.description}
                />

                <Color
                    setColor={props.setColor}
                    colorCode={colors.col4.code}
                    colorName={colors.col4.colorName}
                    description={colors.col4.description}
                />

                <Color
                    setColor={props.setColor}
                    colorCode={colors.col5.code}
                    colorName={colors.col5.colorName}
                    description={colors.col5.description}
                />
             
            </ul>
        </div>

    );
}

export default ColorsList;

ColorsList.propTypes = {
    setColor: PropTypes.func
};