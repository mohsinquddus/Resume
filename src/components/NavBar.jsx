import React from "react";
import {
  githubLink,
  linkedinLink,
  // twitterLink,
  fiverrLink
} from "../user/user";

const NavBar = () => {
  return (
    <div className="container navbar">
      {/* Left Side */}
      <div className="navbar-left">
        <a href="#home">Home</a>
        <a href="#projects-section">Projects</a>
        <a href="#skills-section">Skills</a>
      </div>
      {/* Right Side */}
      <div className="navbar-right">
        <a href={githubLink} target="_blank" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        {/* <a href={twitterLink}>
          <i className="fab fa-twitter"></i>
        </a> */}
        <a href={linkedinLink} target="_blank" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={fiverrLink} target="_blank" title="Fiverr">
          <i className="fas fa-handshake"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
