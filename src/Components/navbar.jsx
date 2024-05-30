import React from "react";
import { Link } from "react-router-dom";
import '../Css/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add-movie">Add Movie</Link>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
