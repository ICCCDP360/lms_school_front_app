import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Correct from "../../../../assests/images/correct.svg";
import Wrong from "../../../../assests/images/wrong.svg";
import Notans from "../../../../assests/images/not ans.svg";
import { Button } from "react-bootstrap";
import "../styles/AssessmentResultPage.scss";

function AssessmentResultPage() {
  const language = localStorage.getItem("lang") || "en";

  return (
    <div className="assessment-resultpage-fullcontainer">
      <div className="header-container">
        <h1 className="header-text">
          {language == "en" ? "Digestive System" : "செரிமான அமைப்பு"}
        </h1>

        <Button className="retake-btn" variant="outline-success">
          {language == "en" ? "Retake Test" : "மீண்டும் சோதனை"}
        </Button>
      </div>
      <div className="first-result-container mt-4">
        <div className="first-container">
          <div className="inner-first">
            <h5>{language == "en" ? "Summary" : "சுருக்கம்"}</h5>
            <p className="mt-3">
              {language == "en"
                ? `Total number of questions: 7`
                : "கேள்விகளின் மொத்த எண்ணிக்கை: 7"}
            </p>
            <p>
              {language == "en"
                ? `Number of questions attempted: 5}`
                : `முயற்சித்த கேள்விகளின் எண்ணிக்கை: 5}`}
            </p>
            <p>
              {language == "en"
                ? `Number of questions correct:  2`
                : `சரியான கேள்விகளின் எண்ணிக்கை:  2`}
            </p>
          </div>

          <div className="inner-second">
            <div className="circular-container">
              <CircularProgressbar value={80} text={`5/7`} />
            </div>
          </div>
        </div>
        <div className="bottom-result mt-2">
          <p>Number of questions correct: 9</p>
          <p>Number of remaining attempt: 1</p>
          <p>Time spent: 10mins</p>
        </div>
      </div> 
      <div className="middle-result-container mt-3">
        <p className="success-text">You have successfully completed Digestive System.</p>
        <button className="success-btn">Next Topic</button>
      </div>
      <div className="second-result-container">
        <div className="scores">
          <div className="leftside-result">
            <p>1.kghvkh</p>
            <div>
              <input
                // name={"resultRdoName-" + datas.number + "-" + index}
                // id={"resultRdo-" + datas.number + "-" + index}
                type="radio"
                // value={data.label}
                // checked={true}
                // checked={resultPage(datas.number, index)}
                // onChange={handleChange}
                // onClick={() => handlebutton(data.ans)}
              />
              <span
                className="label-ans"
                // className={data.ans ? "labeltrue" : "labelfalse"}
              >
                khghj
              </span>
            </div>
          </div>
          <div className="rightside-result">
            <div className="inner-crt-wrg">
              <div className="crt-wrg-container">
                <div className="d-flex">
                  <div className="circle-img-crt">
                    <img src={Correct} className="circle-img" />
                  </div>
                  <p className="crt-text">
                    {language == "en" ? "Correct" : "சரி"}
                  </p>
                </div>
                <div className="d-flex">
                  <div className="circle-img-wrg">
                    <img src={Wrong} className="circle-img" />
                  </div>
                  <p className="wrg-text">
                    {language == "en" ? "Wrong" : "தவறு"}
                  </p>
                </div>
                <div className="d-flex">
                  <div className="circle-img-not">
                    <img src={Notans} className="circle-img" />
                  </div>
                  {language == "en" ? (
                    <p className="not-text-en">Not answered</p>
                  ) : (
                    <p
                      className="not-text-ta"
                      style={{
                        marginLeft: "5%",
                        marginBottom: "3%",
                        width: "150px",
                        fontSize: "11px",
                        marginTop: "2%",
                      }}
                    >
                      பதில் சொல்லவில்லை
                    </p>
                  )}
                </div>
              </div>
              <div className="result-count">
                <div className="inner-count-container">
                  <div className="finall">
                    <button
                      //   key={index}
                      //   onClick={() => selectedNum(index)}
                      //   className={roundbtn(index)}
                      className="active notanswer"
                    >
                      1
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentResultPage;
