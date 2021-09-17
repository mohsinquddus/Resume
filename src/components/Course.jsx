import React from "react";
import { Line } from "rc-progress";
const arrow = ">";
const Course = (props) => {
  const { name, percentage, color } = props.course;
  return (
    
    <div className="skill" title={`${percentage}%`}>
     <div>
       </div> <span className="skill-name">{name}</span>
    </div>
  );
};

export default Course;
