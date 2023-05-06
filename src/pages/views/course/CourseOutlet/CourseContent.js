import React, { useEffect } from "react";
import "../styles/CourseContent.scss";
import Telescope from "../../../../assests/images/telescope.svg";
import Search from "../../../../assests/images/search.svg";
import Intro from "../../../../assests/images/Intro.svg";
import Mouth from "../../../../assests/images/Mouth.svg";
import PDF from "../../../../assests/images/pdfsample.svg";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function CourseContent() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {}, []);

  return (
    <div className="content-full-container">
      <div className="header-container">
        <div className="subject-container">
          <p className="subject-name mb-2">{state.subject}</p>
          <p className="content-name mb-2">{state.name}</p>
        </div>
        <div>
          <img src={Telescope} className="me-4" />
        </div>
      </div>
      <div className="sub-content-container">
        <div className="top-header-container">
          <div className="subject-container">
            <p
              onClick={() => setStep(0)}
              className={
                step === 0 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Video
            </p>
            <p
              onClick={() => setStep(1)}
              className={
                step === 1 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              PDF
            </p>
            <p
              onClick={() => setStep(2)}
              className={
                step === 2 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Practise
            </p>
            <p
              onClick={() => setStep(3)}
              className={
                step === 3 ? "mb-0 subject-text-active" : "mb-0 subject-text"
              }
            >
              Assessment
            </p>
          </div>
          <div className="input-container">
            <img src={Search} width={20} />
            <input className="inputs" placeholder="Search for topics" />
          </div>
        </div>
        <div className="mt-4 content-show">
          {step === 0 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                <Col lg="3" md="6">
                  <div
                    className="video-full-container"
                    onClick={() => navigate("/contentshow", { state: "video" })}
                  >
                    <div>
                      <img src={Intro} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">Introduction</p>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={Mouth} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                  </div>
                </Col>
                {/* ))} */}
              </Row>
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                <Col lg="3" md="6">
                  <div
                    className="video-full-container"
                    onClick={() => navigate("/contentshow", { state: "pdf" })}
                  >
                    <div>
                      <img src={PDF} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">Introduction</p>
                    <button className="mytask-btn mt-3">Read</button>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={PDF} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                    <button className="mytask-btn mt-3">Read</button>
                  </div>
                </Col>
                {/* ))} */}
              </Row>
            </div>
          ) : null}

          {step === 2 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                <Col lg="3" md="6">
                  <div
                    className="video-full-container"
                    onClick={() =>
                      navigate("/contentshow", { state: "practise" })
                    }
                  >
                    <div>
                      <img src={Intro} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">Introduction</p>
                    <button className="mytask-btn mt-3">Practise</button>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={Mouth} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                    <button className="mytask-btn mt-3">Practise</button>
                  </div>
                </Col>
                {/* ))} */}
              </Row>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <Row>
                {/* {videoData.map((data, index) => ( */}
                <Col lg="3" md="6">
                  <div
                    className="video-full-container"
                    onClick={() =>
                      navigate("/contentshow", { state: "assessment" })
                    }
                  >
                    <div>
                      <img src={Intro} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">Introduction</p>
                    <button className="mytask-btn mt-3">Take Test</button>
                  </div>
                </Col>
                <Col lg="3" md="6">
                  <div className="video-full-container">
                    <div>
                      <img src={Mouth} className="video-main-img" />
                    </div>
                    <p className="video-header-content mt-2">
                      Mouth & Buccal cavity
                    </p>
                    <button className="mytask-btn mt-3">Take Test</button>
                  </div>
                </Col>
                {/* ))} */}
              </Row>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
