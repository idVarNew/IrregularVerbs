import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  let input;

  return (
    <form className="search" role="search">
    <input
      type="search"
      className="search__box"
      ref={(item) => {
        input = item
      }}
      placeholder="Search for..."
      aria-label="Search for"
      onInput={(event) => {
        event.preventDefault()
        props.searchFor(input.value)
      }}
    />
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchFor: PropTypes.func,
};
