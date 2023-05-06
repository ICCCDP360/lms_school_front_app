import React from "react";
import { Outlet } from "react-router-dom";
import CourseHeader from "./CourseHeader";

function Course() {
  return (
    <div className="course-header">
      <CourseHeader />
      <Outlet />
    </div>
  );
}

export default Course;
