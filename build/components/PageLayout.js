import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./layout/Header";


const PageLayout = (props) => (
  <Fragment>
    <Header />
    <main className="app__main">{React.cloneElement(props.children, props)}</main>
  </Fragment>
);

export default PageLayout;


PageLayout.propTypes = {
  children: PropTypes.element
}