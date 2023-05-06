import React, { useState, useEffect } from "react";
import School from "../../../assests/images/school.svg";
import Notification from "../../../assests/images/notify.svg";
import { useNavigate } from "react-router";
import "./styles/profileheader.scss";
import { Dropdown } from "react-bootstrap";

function ProfileHeader() {
  const navigate = useNavigate();
  const [schoolDetails, SetSchoolDetails] = useState("");
  useEffect(() => {
    // const Data = JSON.parse(localStorage.getItem("user"));
    SetSchoolDetails();
  }, []);
  return (
    <div className="profile-header-main-container">
      <div className="profile-sub-container-1">
        <div className="main-div-1">
          <p className="main-div-para-1">Profile</p>
        </div>
        <div className="main-div-2">
          <div className="drop-profile-div-1">
            <Dropdown>
              <Dropdown.Toggle className="drp-toggle">
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="drp-menu">
                <div className="drp-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="content-para-header">Content_Admin</p>
                    <p className="content-para-header">01:00</p>
                  </div>
                  <p className="content-para-header-new">
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr className="hr-header" />
                <div className="drp-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="content-para-header">Content_Admin</p>
                    <p className="content-para-header">02:38</p>
                  </div>
                  <p className="content-para-header-new">
                    New lesson was added in chemistry
                  </p>
                </div>
                <hr className="hr-header" />
                <div className="drp-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="content-para-header">SPOC</p>
                    <p className="content-para-header">12:30</p>
                  </div>
                  <p className="content-para-header-new">
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr className="hr-header" />
                <p
                  className="view-para"
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
              style={{
                cursor: "pointer",
                marginTop: "0.35rem",
                borderRadius: "50%",
              }}
              // onClick={Schoolprofile}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProfileHeader;
