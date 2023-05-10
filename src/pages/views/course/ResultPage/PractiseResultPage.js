import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PractiseResultPage.scss";
import videoComplete from "../../../../assests/images/videoFinish.svg";
import PdfComplete from "../../../../assests/images/pdfFinish.svg";
import PractiseProcess from "../../../../assests/images/practiseProcess.svg";
import Assessment from "../../../../assests/images/assessmentview.svg";

// import assesemnetServices from "../../../../services/assesmentContent";

function PractiseResultPage() {
  const language = localStorage.getItem("lang") || "en";
  const [assesmentData, setAssesmentData] = useState([]);
  const {state}=useLocation()
  console.log(state,'manoj');

  const navigate = useNavigate();

  //   useEffect(() => {
  //     assesemnetServices
  //       .AssesmentContent(user)
  //       .then((res) => {
  //         setAssesmentData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className="practise-result-full-container">
      <div className="showscore-container">
        <div className="showscore-inside-container">
          <div className="show-header-img-container">
            <img src={videoComplete} />
            <p>{language == "en" ? "Video" : "வீடியோ"}</p>
          </div>
          <div className="show-header-img-container">
            <img src={PdfComplete} />
            <p>PDF</p>
          </div>
          <div className="show-header-img-container">
            <img src={PractiseProcess} />
            <p>{language == "en" ? "Practice" : "பயிற்சி"}</p>
          </div>
          <div className="show-header-img-container">
            <img src={Assessment} />
            <p>{language == "en" ? "Assessment" : "மதிப்பீடு"}</p>
          </div>
        </div>
      </div>
      <div className="middle-result-container mt-3">
        <p className="success-text">
          You have successfully completed Digestive System.
        </p>
        <button className="success-btn">Next Topic</button>
      </div>
      <div className="second-result-container">
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
      </div>
    </div>
  );
}

export default PractiseResultPage;
