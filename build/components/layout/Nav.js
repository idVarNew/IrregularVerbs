import React from "react";
import { Link } from "react-router";


const Nav = () => (
  <nav className="nav">
    <Link to="/explore" className="nav__link">
      Explore
    </Link>{" "}
    <Link to="/learn" className="nav__link">
      Learn
    </Link>{" "}
    <Link to="/exam" className="nav__link">
      Exam
    </Link>{" "}
    <Link to="/about" className="nav__link">
      About
    </Link>{" "}
    <Link to="/results" className="nav__link">
      Results
    </Link>{" "}
  </nav>
);

export default Nav;
