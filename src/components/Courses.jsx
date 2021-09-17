import React from "react";
import { allcourses} from "../user/user";
import { allcourses2} from "../user/user";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="container courses-container" id="courses-section">
      <div className="courses">
        <h1>Courses</h1>
        {allcourses.map((course) => (
          <Course course={course} key={course.name} />
        ))}
      </div>
      <div className="courses">
        <h1>Extra-Curricular Activities</h1>
        {allcourses2.map((course) => (
          <Course course={course} key={course.name} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
