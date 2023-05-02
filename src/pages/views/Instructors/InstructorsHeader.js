import React, { useState, useEffect } from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./styles/instructor.scss";

function InstructorsHeader() {
  const navigate = useNavigate();
  const [schoolDetails, SetSchoolDetails] = useState("");
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("user"));
    SetSchoolDetails(Data);
  }, []);
  function Schoolprofile() {
    navigate("/profile");
  }
  return (
    <div className="main-container-instructor">
      <div className="d-flex justify-content-between">
        <div className="instructor-header-main-container">
          <p
            className="para-teacher-instructor-header"
            // style={{
            //   fontSize: "24px",
            //   fontWeight: "700",
            //   color: "#333333",
            //   marginTop: "0px",
            //   marginBottom: "0px",
            // }}
          >
            Teachers
          </p>
          <p
            className="para-total"
            // style={{
            //   fontSize: "16px",
            //   fontWeight: "500",
            //   marginTop: "0px",
            //   marginBottom: "0px",
            // }}
          >
            Total Number of Teachers: 10
          </p>
        </div>
        <div className="instructor-header-main-container-1">
          <div className="dropdown-container-main">
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-toggle-instructor "
                // style={{
                //   backgroundColor: "transparent",
                //   border: "transparent",
                // }}
              >
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="dropdown-menu-instructor"
                // style={{
                //   width: "310px",
                //   marginLeft: "-250px",
                //   cursor: "pointer",
                // }}
              >
                <div
                  className="instructor-container-div-1"
                  // style={{
                  //   paddingLeft: "5%",
                  //   fontSize: "18px",
                  //   fontWeight: "600",
                  //   paddingRight: "5%",
                  // }}
                >
                  <div
                    className="d-flex justify-content-between"
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "space-between",
                    // }}
                  >
                    <p className="instructor-container-para">Content_Admin</p>
                    <p className="instructor-container-para">01:00</p>
                  </div>
                  <p className="new-para">New videos was uploaded on th...</p>
                </div>
                <hr
                  className="hr-instructor-header "
                  // style={{
                  //   marginTop: "5px",
                  //   borderTop: "2px solid gray",
                  //   marginBottom: "5px",
                  // }}
                />
                <div className="instructor-container-div-1">
                  <div className="d-flex justify-content-between">
                    <p className="instructor-container-para">Content_Admin</p>
                    <p className="instructor-container-para">02:38</p>
                  </div>
                  <p className="new-para">New lesson was added in chemistry</p>
                </div>
                <hr className="hr-instructor-header " />
                <div className="instructor-container-div-1">
                  <div className="d-flex justify-content-between">
                    <p className="instructor-container-para">SPOC</p>
                    <p className="instructor-container-para">12:30</p>
                  </div>
                  <p className="new-para">New videos was uploaded on th...</p>
                </div>
                <hr className="hr-instructor-header " />
                <p
                  className="view-instructor-all"
                  onClick={() => navigate("/notification")}
                >
                  View all
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <img
              src={schoolDetails?.logo}
              width="30px"
              height="30px"
              className="school-img"
              style={{
                cursor: "pointer",
                marginTop: "0.35rem",
                borderRadius: "50%",
              }}
              onClick={Schoolprofile}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default InstructorsHeader;
