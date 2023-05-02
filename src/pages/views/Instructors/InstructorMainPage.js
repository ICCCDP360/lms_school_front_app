import React from "react";
import InstructorContent from "./InstructorContent";
import InstructorsHeader from "./InstructorsHeader";

function InstructorMainPage() {
  return (
    <div className="instructor-mainpage-container">
      <InstructorsHeader />
      <InstructorContent />
    </div>
  );
}

export default InstructorMainPage;
