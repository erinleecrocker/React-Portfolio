import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-custom nav-link">
      <a
        className="nav-link"
        to="/"
        href="/"
        id = 'site-title'
      >
        Erin Lee Crocker
      </a>
      <button
        className="navbar-light navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
