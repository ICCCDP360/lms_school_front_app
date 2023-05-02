import React from "react";
import StudentsHeader from "./StudentsHeader";
import StuedentsContent from "./StuedentsContent";

const StudentsMainPage = () => {
  return (
    <div
      className="student-mainpage-container"
      // style={{
      //   padding: "1%",
      //   width: "100%",
      // }}
    >
      <StudentsHeader />
      <StuedentsContent />
    </div>
  );
};

export default StudentsMainPage;
