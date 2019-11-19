import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper white dark-text">
      <Link to="/" className="brand-logo pixar-logo"/>
      <Link to="/" className=" margin-button btn-small blue-grey darken-4">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
