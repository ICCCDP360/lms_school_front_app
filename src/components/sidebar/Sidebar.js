import React, { useState, useEffect } from "react";
import "./styles/Sidebar.scss";
import logo from "../../assests/logo.svg";
import dashboardWhite from "../../assests/images/dashboardWhite.svg";
import dashboardBlack from "../../assests/images/dashboardBlack.svg";
import contentWhite from "../../assests/images/contentWhite.svg";
import contentBlack from "../../assests/images/contentBlack.svg";
import forumWhite from "../../assests/images/forumWhite.svg";
import forumBlack from "../../assests/images/forumBlack.svg";
import LogoutIcon from "../../assests/images/logoutIcon.svg";
import RightArrow from "../../assests/images/rightArrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const stepCount = 0;
  const [slide, setSlide] = useState(true);

  const dashboardPage = () => {
    navigate("/dashboard");
  };
  const [schoolDetails, SetSchoolDetails] = useState("");
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("user"));
    SetSchoolDetails(Data);
  }, []);
  const contentPage = () => {
    navigate("/instructor");
  };
  const studentContent = () => {
    navigate("/student");
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      {slide ? (
        <div className="sidebar-full-container">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              <img
                src={logo}
                alt="school logo"
                width="80px"
                height="80px"
                className="header-logo mt-4"
              />
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                {stepCount === 1 ? (
                  <img src={dashboardWhite} />
                ) : (
                  <img src={dashboardBlack} />
                )}
                <p className="sidetext-content">Dashboard</p>
              </div>
              <div
                className={
                  location.pathname === "/instructor"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                {stepCount === 1 ? (
                  <img src={contentWhite} />
                ) : (
                  <img src={contentBlack} />
                )}
                <p className="sidetext-content">Instructors</p>
              </div>
              <div
                className={
                  location.pathname === "/student"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={studentContent}
              >
                {stepCount === 1 ? (
                  <img src={forumWhite} />
                ) : (
                  <img src={forumBlack} />
                )}
                <p className="sidetext-content">Students</p>
              </div>
            </div>
            <div className="end-divider-container">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div className="logout-btn-container">
                <img src={LogoutIcon} className="logout-img" />
                <p className="logout-text" onClick={logout}>
                  Logout
                </p>
              </div>
            </button>
            <div className="slide-btn-container">
              <button className="slide-btn" onClick={() => setSlide(false)}>
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-full-container-sm">
          <div>
            <div
              className="header-logo-container"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
            >
              {/* <img src={AdamLogo} className="header-logo" /> */}
            </div>
            <div className="header-divider-container">
              <hr className="divider-line" />
            </div>
            <div className="sidecontent-container">
              <div
                className={
                  location.pathname === "/dashboard"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={dashboardPage}
              >
                {stepCount === 1 ? (
                  <img src={dashboardWhite} />
                ) : (
                  <img src={dashboardBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/content"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                onClick={contentPage}
              >
                {stepCount === 1 ? (
                  <img src={contentWhite} />
                ) : (
                  <img src={contentBlack} />
                )}
              </div>
              <div
                className={
                  location.pathname === "/forum"
                    ? "single-sidecontent-active"
                    : "single-sidecontent"
                }
                // onClick={forumPage}
              >
                {stepCount === 1 ? (
                  <img src={forumWhite} />
                ) : (
                  <img src={forumBlack} />
                )}
              </div>
            </div>
            <div className="end-divider-container">
              <hr className="end-divider-line" />
            </div>
          </div>
          <div className="logout-main-container">
            <button className="logout-btn">
              <div onClick={logout} className="logout-btn-container">
                <img
                  src={LogoutIcon}
                  // className={
                  //   language == "english" ? "logout-img" : "logout-img-tamil"
                  // }
                />
              </div>
            </button>
            <div className="slide-btn-container">
              <button onClick={() => setSlide(true)} className="slide-btn">
                <img src={RightArrow} className="slide-img" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ); */}
      {/* })} */}
    </>
  );
}

export default Sidebar;
