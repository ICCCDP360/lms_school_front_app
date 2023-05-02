import React from "react";
// import Dashboard from "../../assets/images/dashboardBlack.svg";
// import Course from "../../assets/images/contentBlack.svg";
// import Qna from "../../assets/images/forumBlack.svg";
import Dashboard from "../../assests/images/dashboardBlack.svg";
import Course from "../../assests/images/contentBlack.svg";
import Qna from "../../assests/images/forumBlack.svg";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/Sidebarbottom.scss";

function Sidebarbottom() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        backgroundColor: "white",
        height: "22vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          //   padding: "1%",
        }}
      >
        <div
          className={
            location.pathname === "/dashboard"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/dashboard")}
          style={{ textAlign: "center" }}
        >
          <img src={Dashboard} />
          <p style={{ marginBottom: "0px" }}>Dashboard</p>
        </div>
        <div
          className={
            location.pathname === "/instructor"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/instructor")}
          style={{ textAlign: "center" }}
        >
          <img src={Course} />
          <p style={{ marginBottom: "0px" }}>Instructors</p>
        </div>
        <div
          className={
            location.pathname === "/student"
              ? "single-sidecontent-bottom-active"
              : "single-sidecontent-bottom"
          }
          onClick={() => navigate("/student")}
          style={{ textAlign: "center" }}
        >
          <img src={Qna} />
          <p style={{ marginBottom: "0px" }}>Students</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebarbottom;
