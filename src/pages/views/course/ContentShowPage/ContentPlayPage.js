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
import pdfContentService from "../../../../services/pdfByCourse";
import videoContentService from "../../../../services/videoByCourse";
import practiseContentService from '../../../../services/practiseByCourse'
import assessmentContentService from '../../../../services/assessmentByCourse'

function ContentPlayPage() {
  const { state } = useLocation();
  console.log(state.name,'state');
  const [pageDeside, setPageDeside] = useState(state.name);
  const [getId, setGetId] = useState(state.id);
  const [videoImg, setVideoImg] = useState(Video);
  const [pdfImg, setPdfImg] = useState(Pdf);
  const [practiseImg, setPractiseImg] = useState(Practise);
  const [assessmentImg, setAssessmentImg] = useState(Assessment);
  const [heading,setHeading]=useState('')
  const [subChapterId,setSubChapterId]=useState('')
  const [videoData, setVideoData] = useState("");
  const [pdfData, setPdfData] = useState("");
  const [practiseData,setPractiseData]=useState([])
  const [assessmentData,setAssessmentData]=useState([])
  const language = localStorage.getItem('lang')

  const videoSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        subchapterId: id,
        languageCode:language
      };
      videoContentService
        .videoContent(data)
        .then((res) => {
          setHeading(res[0].subChapterName)
          setVideoData(res[0].video[0].videoId);
          setSubChapterId(res[0].subchapterId)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const pdfSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        subchapterId: id,
        languageCode:language
      };
      pdfContentService
        .pdfContent(data)
        .then((res) => {
          setPdfData(res[0].pdf[0].pdfUrl)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const practiseSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        subchapterId: id,
        languageCode:language
      };
      practiseContentService
        .practiseContent(data)
        .then((res) => {
          setPractiseData(res[0].practices)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  const assessmentSelectionApi = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        subchapterId: id,
        languageCode:language
      };
      assessmentContentService
        .assessmentContent(data)
        .then((res) => {
          setAssessmentData(res[0].assessments)
        })
        .catch((err) => {
          console.log(err);
          reject(false);
        });
    });
  };

  useEffect(() => {
    if (pageDeside == "video") {
      videoSelectionApi(getId);
    } else if (pageDeside == "pdf") {
      pdfSelectionApi(getId);
    } else if (pageDeside == "practise") {
      practiseSelectionApi(getId);
    }else if (pageDeside == "assessment") {
      assessmentSelectionApi(getId);
    }
  }, []);

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

  const videoClick = () => {
    setPageDeside("video");
    videoSelectionApi(getId);
  };

  const pdfClick = () => {
    setPageDeside("pdf");
    pdfSelectionApi(getId);
  };

  const practiseClick = () => {
    setPageDeside("practise");
    practiseSelectionApi(getId);
  };

  const assessmentClick = () => {
    setPageDeside("assessment");
    assessmentSelectionApi(getId);
  };
  return (
    <div className="content-page-full">
      <div>
        <p className="sub-heading">{heading}</p>
        <div className="heading-img-maincontainer mt-3">
          <div className="heading-img-container">
            <div onClick={videoClick}>
              <img src={videoImg} />
              <p>Video</p>
            </div>
            <div onClick={pdfClick}>
              <img src={pdfImg} />
              <p>Pdf</p>
            </div>
            <div onClick={practiseClick}>
              <img src={practiseImg} />
              <p>Practise</p>
            </div>
            <div onClick={assessmentClick}>
              <img src={assessmentImg} />
              <p>Assessment</p>
            </div>
          </div>
        </div>
      </div>
      {pageDeside == "video" ? <VideoPlayer videoData={videoData} /> : null}
      {pageDeside == "pdf" ? <PdfPage pdfData={pdfData}/> : null}
      {pageDeside == "practise" ? <PractisePage practiseData={practiseData} heading={heading} subChapterId={subChapterId}/> : null}
      {pageDeside == "assessment" ? <AssessmentPage assessmentData={assessmentData} heading={heading}/> : null}
    </div>
  );
}

export default ContentPlayPage;
