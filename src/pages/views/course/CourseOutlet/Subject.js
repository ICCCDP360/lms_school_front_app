import React from "react";
import "../styles/Subject.scss";
import Search from "../../../../assests/images/search.svg";
import { useState } from "react";
import Chapter from "../../../../assests/images/chapter.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import subjectService from "../../../../services/subjectService";

function Subject() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    classSelectionApi(step);
  }, []);

  const subjectText = (index) => {
    setStep(index);
    classSelectionApi(index);
  };

  const classSelectionApi = (step) => {
    return new Promise((resolve, reject) => {
      let data = {
        standard: state[step].standard,
        subject: state[step].subject,
        courseId: state[step].course,
      };
      subjectService
        .subjectServiceSelect(data)
        .then((res) => {
          setSubjectData(res);
          console.log(res, "manoj");
        })
        .catch((err) => {
          setSubjectData(err.response.data);
          // if (err.response.data == "School Not Found") {
          //     setError("Account not found");
          //   }
          reject(false);
        });
    });
  };

  const courseContentPage = (data) => {
    navigate("/course/content", { state: data });
  };

  return (
    <div className="subject-full-container">
      <div className="top-header-container">
        <div className="subject-container">
          {state.map((data, index) => (
            <p
              onClick={() => subjectText(index)}
              className={
                step === index
                  ? "mb-0 subject-text-active"
                  : "mb-0 subject-text"
              }
            >
              {data.subject}
            </p>
          ))}
        </div>
        <div className="input-container">
          <img src={Search} width={20} />
          <input
            className="inputs"
            placeholder="Search for subjects, chapters"
          />
        </div>
      </div>

      {subjectData.map((data) => (
        <>
          {data.languageCode == "en" ? (
            <div className="myTask-full-container mt-4">
              <div className="mytask-sub-container">
                <div>
                  <h1 className="subject-content">{data.name}</h1>
                  <div className="subject-btm-container mt-3">
                    <img src={Chapter} />
                    <p className="subject-btm-text mb-0">
                      {data.pdfsCount} Chapter
                    </p>
                  </div>
                  <button
                    onClick={() => courseContentPage(data)}
                    className="mytask-btn mt-3"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>{data.message}</p>
          )}
        </>
      ))}

      {/* {step === 0 ? (
        <div className="myTask-full-container mt-4">
          <div className="mytask-sub-container">
            <div>
              <h1 className="subject-content">Nutrition in Animals</h1>
              <div className="subject-btm-container mt-3">
                <img src={Chapter} />
                <p className="subject-btm-text mb-0">8 Chapter</p>
              </div>
              <button
                onClick={() => navigate("/course/content")}
                className="mytask-btn mt-3"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
      {/* {step === 1 ? (
        <div className="myTask-full-container mt-4">
          <div className="mytask-sub-container">
            <div>
              <h1 className="subject-content">Geomentry</h1>
              <div className="subject-btm-container mt-3">
                <img src={Chapter} />
                <p className="subject-btm-text mb-0">5 Chapter</p>
              </div>
              <button
                onClick={() => navigate("/course/content")}
                className="mytask-btn mt-3"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
    </div>
  );
}

export default Subject;
