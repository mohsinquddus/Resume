import React from "react";
import Project from "./Project";
import { projects } from "../user/user";

const Projects = () => {
  return (
    <div className="container projects-container" id="projects-section">
      <span className="projects-title">Projects</span>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
