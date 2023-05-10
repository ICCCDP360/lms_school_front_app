import React, { useState, useEffect } from "react";
import "../styles/PractiseText.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useRef } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function AssessmentText() {
  const { state } = useLocation();
  const navigate=useNavigate()
  const [qusetionData, setQuestionData] = useState(state.data);
  const [index, setIndex] = useState(0);
  const totalTime = 360;
  const [countdown, setCountDown] = useState(totalTime);
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerID.current);
  }, []);
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerID.current);
    }
  }, [countdown]);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const skipChange = () => {
    setIndex(index + 1);
  };

  const numSelect = (index) => {
    setIndex(index);
  };

  const nextBtn = () => {
    setIndex(index + 1);
  };

  const submitBtn=()=>{
    navigate('/assessment_result')
  }
  return (
    <div className="practisetext-fullcontainer">
      <p className="heading-subject">{state.heading}</p>
      <div className="practise-container-sm">
        <div className="questionpage-practice-container">
          <div className="questionpage-inner-container">
            <p className="question-text">
              {index + 1}.{qusetionData[index].question}
            </p>

            <div className="answer-label">
              {qusetionData[index].answeroptions.map((data) => (
                <div className="answer-inner-container">
                  <input className="radio-input" type="radio" />
                  <span className="answer-text">{data.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="count-side-practise">
          <div className="remaining-time-container">
            <p className="remaining-text">Remaining Timing:</p>
            <p className="mb-0">{formatTime(countdown)}</p>
          </div>
          <div>
            <p className="qusetion-head-text">Questions</p>
            <div className="count-number-container">
              <div className="count-number-innercontainer">
                {qusetionData.map((data, index) => (
                  <button className="active" onClick={() => numSelect(index)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="data-button">
        {index > 0 ? (
          <Button onClick={handlePrev} className="prev-btn">
            Prev
          </Button>
        ) : (
          <Button disabled onClick={handlePrev} className="prev-btn">
            Prev
          </Button>
        )}

        <div style={{ display: "flex" }}>
          <button className="skip-answer" onClick={skipChange}>
            Skip
          </button>
          {index + 1 === qusetionData.length ? (
            <button onClick={submitBtn} className="data-next">Submit</button>
          ) : (
            <>
              <button onClick={nextBtn} className="data-next">
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssessmentText;
