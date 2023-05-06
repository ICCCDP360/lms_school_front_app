import React from "react";
import Course from "./Course";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ClassSection from "./CourseOutlet/ClassSection";
import Subject from "./CourseOutlet/Subject";
import CourseContent from "./CourseOutlet/CourseContent";

function CourseRoute() {
  return (
    <Routes>
      <Route path="/" element={<Course />}>
        <Route path="/" element={<ClassSection />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/content" element={<CourseContent />} />
      </Route>
    </Routes>
  );
}

export default CourseRoute;
