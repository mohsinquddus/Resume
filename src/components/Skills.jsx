import React from "react";
import { langs } from "../user/user";
import { langs2 } from "../user/user";
import { langs3 } from "../user/user";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="container skills-container" id="skills-section">
      <span className="skills-title">Skills</span>
      <div className="innerskillscontainer">
      <div className="skills">
        {langs.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
      <div className="skills">
        {langs2.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
      <div className="skills">
        {langs3.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
