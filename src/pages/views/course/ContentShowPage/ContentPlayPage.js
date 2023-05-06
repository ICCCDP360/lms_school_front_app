import React from "react";
import Video from "../../../../assests/images/videoProcess.svg";
import videoComplete from "../../../../assests/images/videoFinish.svg";
import Pdf from "../../../../assests/images/pdfview.svg";
import PdfProcess from "../../../../assests/images/pdfProcess.svg";
import PdfComplete from "../../../../assests/images/pdfFinish.svg";
import Practise from "../../../../assests/images/practiseview.svg";
import PractiseProcess from "../../../../assests/images/practiseProcess.svg";
import PractiseComplete from "../../../../assests/images/practiseFinish.svg";
import Assessment from "../../../../assests/images/assessmentview.svg";
import AssessmentProcess from "../../../../assests/images/assessmentProcess.svg";
import "../styles/ContentPlayPage.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import PdfPage from "./PdfPage";
import PractisePage from "./PractisePage";
import AssessmentPage from "./AssessmentPage";

function ContentPlayPage() {
  const { state } = useLocation();
  const [pageDeside, setPageDeside] = useState(state);
  const [videoImg, setVideoImg] = useState(Video);
  const [pdfImg, setPdfImg] = useState(Pdf);
  const [practiseImg, setPractiseImg] = useState(Practise);
  const [assessmentImg, setAssessmentImg] = useState(Assessment);

  useEffect(() => {
    if (pageDeside == "video") {
      setVideoImg(Video);
      setPdfImg(Pdf);
      setPractiseImg(Practise);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "pdf") {
      setVideoImg(videoComplete);
      setPdfImg(PdfProcess);
      setPractiseImg(Practise);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "practise") {
      setVideoImg(videoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseProcess);
      setAssessmentImg(Assessment);
    } else if (pageDeside == "assessment") {
      setVideoImg(videoComplete);
      setPdfImg(PdfComplete);
      setPractiseImg(PractiseComplete);
      setAssessmentImg(AssessmentProcess);
    }
  });
  return (
    <div className="content-page-full">
      <div>
        <p className="sub-heading">Digestive System</p>
        <div className="heading-img-maincontainer mt-3">
          <div className="heading-img-container">
            <div onClick={() => setPageDeside("video")}>
              <img src={videoImg} />
              <p>Video</p>
            </div>
            <div onClick={() => setPageDeside("pdf")}>
              <img src={pdfImg} />
              <p>Pdf</p>
            </div>
            <div onClick={() => setPageDeside("practise")}>
              <img src={practiseImg} />
              <p>Practise</p>
            </div>
            <div onClick={() => setPageDeside("assessment")}>
              <img src={assessmentImg} />
              <p>Assessment</p>
            </div>
          </div>
        </div>
      </div>
      {pageDeside == "video" ? <VideoPlayer /> : null}
      {pageDeside == "pdf" ? <PdfPage /> : null}
      {pageDeside == "practise" ? <PractisePage /> : null}
      {pageDeside == "assessment" ? <AssessmentPage /> : null}
    </div>
  );
}

export default ContentPlayPage;
