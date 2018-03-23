import React from "react";
import FeaturedFilterLink from "../../containers/filters/Featured.js";


const FeaturedFilter = () => (
  <div className="featured-filter">
    <span className="featured-filter__text"> Show:</span>
    {" "}
    <FeaturedFilterLink filterName="SHOW_ALL">
      All
    </FeaturedFilterLink>
    {" "}
    <FeaturedFilterLink filterName="SHOW_FEATURED">
      Featured &#10033;
    </FeaturedFilterLink>
    {" "}
    <FeaturedFilterLink filterName="SHOW_NOT_FEATURED">
      not Featured &#9866;
    </FeaturedFilterLink>
  </div>
);

export default FeaturedFilter;
