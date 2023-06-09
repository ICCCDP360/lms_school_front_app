import React from "react";
import StudentsHeader from "./StudentsHeader";
import StuedentsContent from "./StuedentsContent";

const StudentsMainPage = () => {
  return (
    <div className="student-mainpage-container">
      <StudentsHeader />
      <StuedentsContent />
    </div>
  );
};

export default StudentsMainPage;
