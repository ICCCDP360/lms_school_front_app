import React from "react";
import "../styles/ClassSection.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classSelectionService from "../../../../services/classSelection";

function ClassSection() {
  const navigate = useNavigate();

  const classSelectionApi = (std) => {
    return new Promise((resolve, reject) => {
      let data = {
        standard: std,
      };
      classSelectionService
        .classSelect(data)
        .then((res) => {
          navigate("/course/subject", { state: res });
        })
        .catch((err) => {
          console.log(err, "manoj");
          // if (err.response.data == "School Not Found") {
          //     setError("Account not found");
          //   }
          reject(false);
        });
    });
  };

  const ApiCall = (data) => {
    classSelectionApi(data);
  };
  return (
    <div className="class-main-container">
      <p className="foundation-text">Foundational Course</p>
      <div className="foundation-class">
        <div className="class-box1" onClick={() => ApiCall("6")}>
          <p className="class-text">Class 6</p>
        </div>
        <div className="class-box2" onClick={() => ApiCall("7")}>
          <p className="class-text">Class 7</p>
        </div>
        <div className="class-box3" onClick={() => ApiCall("8")}>
          <p className="class-text">Class 8</p>
        </div>
        <div className="class-box4" onClick={() => ApiCall("9")}>
          <p className="class-text">Class 9</p>
        </div>
        <div className="class-box5" onClick={() => ApiCall("10")}>
          <p className="class-text">Class 10</p>
        </div>
      </div>
      <p className="foundation-text mt-4">Preparation Course</p>
      <div className="preparation-class">
        <div className="class-box1" onClick={() => ApiCall("11")}>
          <p className="class-text">Class 11</p>
        </div>
        <div className="class-box2" onClick={() => ApiCall("12")}>
          <p className="class-text">Class 12</p>
        </div>
      </div>
    </div>
  );
}

export default ClassSection;
