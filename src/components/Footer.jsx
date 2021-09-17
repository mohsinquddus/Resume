import React from "react";
import { repoLink } from "../user/user";

const Footer = () => {
  return (
    <div className="container footer-container">
      <ul>
        <li title="GitHub Repo.">
          <a href={repoLink}>
            Project Repo. <i className="fab fa-github"></i>
          </a>
        </li>
        <li> | </li>
        <li>
          {" "}
          Feel free to use it. <i className="fas fa-code-branch"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
