import React from "react";

function Navbar(props) {
  return (
    <ul className="navbar navbar-dark bg-dark">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Erin Lee Crocker
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.handlePageChange("Blog")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

