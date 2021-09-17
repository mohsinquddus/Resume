import React from "react";

const Project = (props) => {
  const { title, desc, demo, repo } = props.project;
  return (
    <div className="project shadow">
      <span className="project-title">{title}</span>
      <div className="project-desc">{desc}</div>
      {demo ? (
        <a href={demo} title="Demo">
          <i className="fab fa-youtube"></i>
        </a>
      ) : (
        ""
      )}
      <a href={repo} title="Code/Repo">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default Project;
