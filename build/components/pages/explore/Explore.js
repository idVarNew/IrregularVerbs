import React, { Fragment } from "react";
import Main from "../../../containers/filters/VisibleList";
import FilterFeatured from "../../filters/Featured.js";
import FilterColors from "../../filters/Colors.js";
import SearchBox from "../../../containers/Search";
import PrevLink from "../../modules/PrevLink";

const Explore = () => (
  <div className="page explore-page" >
    <PrevLink href={"/"} />
    <h2 className="page__title">Explore</h2>
    <SearchBox />
    <FilterFeatured />
    <FilterColors />
    <Main />
  </div>
);

export default Explore;
