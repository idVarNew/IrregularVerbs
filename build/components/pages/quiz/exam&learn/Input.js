import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import Results from "./Results";

const Form = (props) => (
    <Fragment>
        <label htmlFor="question-input" hidden>Fill the field</label>
        <input
            id="question-input"
            placeholder={props.placeholder}
            onChange={props.onInputChange}
            value={props.inputValue}
            className="question__input"
        />

    </Fragment>
);


export default Form;


Form.propTypes = {
    placeholder: PropTypes.string,
    onInputChange: PropTypes.func,
    inputValue: PropTypes.string
};