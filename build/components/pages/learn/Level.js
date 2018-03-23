import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";


const Level = (props) => {

    return (
        <li className="levels__item">
            <Link
                to={`/l-test/${props.level}`}
                className="level"
                onClick={props.resetPrevious}
            >
                <h4 className="level__name" >
                    {props.level}
                </h4>

                <div className="level__result" >
                    Verbs:  {props.getAllCorectAnswers(props.level)}
                </div>
            </Link>
        </li>
    );
}

export default Level;

Level.propTypes = {
    level: PropTypes.string,
    getAllCorectAnswers: PropTypes.func,
    resetPrevious: PropTypes.func
};