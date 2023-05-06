import React, { useState, useEffect } from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./styles/Course.scss";

function CourseHeader() {
  const navigate = useNavigate();
  const [schoolDetails, SetSchoolDetails] = useState("");

  function Schoolprofile() {
    navigate("/profile");
  }
  return (
    // <div>
    //   <div className="header-response">
    //     <div style={{ marginLeft: "1%" }}>
    //       <p
    //         className="profile_header">
    //         Content
    //       </p>
    //     </div>
    //     <div style={{ display: "flex",paddingRight:'1%', paddingBottom: "0px" }}>
    //       <div className="notify">
    //         <Dropdown>
    //           <Dropdown.Toggle
    //             style={{
    //               backgroundColor: "transparent",
    //               border: "transparent",
    //             }}
    //           >
    //             <img src={Notification} />
    //           </Dropdown.Toggle>

    //           <Dropdown.Menu
    //             style={{
    //               width: "310px",
    //               marginLeft: "-250px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 paddingLeft: "5%",
    //                 fontSize: "18px",
    //                 fontWeight: "600",
    //                 paddingRight: "5%",
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                 }}
    //               >
    //                 <p style={{ marginBottom: "0px" }}>Content_Admin</p>
    //                 <p style={{ marginBottom: "0px" }}>01:00</p>
    //               </div>
    //               <p style={{ marginBottom: "0px", fontSize: "17px" }}>
    //                 New videos was uploaded on th...
    //               </p>
    //             </div>
    //             <hr
    //               style={{
    //                 marginTop: "5px",
    //                 borderTop: "2px solid gray",
    //                 marginBottom: "5px",
    //               }}
    //             />
    //             <div
    //               style={{
    //                 paddingLeft: "5%",
    //                 fontSize: "18px",
    //                 fontWeight: "600",
    //                 paddingRight: "5%",
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                 }}
    //               >
    //                 <p style={{ marginBottom: "0px" }}>Content_Admin</p>
    //                 <p style={{ marginBottom: "0px" }}>02:38</p>
    //               </div>
    //               <p style={{ marginBottom: "0px", fontSize: "17px" }}>
    //                 New lesson was added in chemistry
    //               </p>
    //             </div>
    //             <hr
    //               style={{
    //                 marginTop: "5px",
    //                 borderTop: "2px solid gray",
    //                 marginBottom: "5px",
    //               }}
    //             />
    //             <div
    //               style={{
    //                 paddingLeft: "5%",
    //                 fontSize: "18px",
    //                 fontWeight: "600",
    //                 paddingRight: "5%",
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                 }}
    //               >
    //                 <p style={{ marginBottom: "0px" }}>SPOC</p>
    //                 <p style={{ marginBottom: "0px" }}>12:30</p>
    //               </div>
    //               <p style={{ marginBottom: "0px", fontSize: "17px" }}>
    //                 New videos was uploaded on th...
    //               </p>
    //             </div>
    //             <hr
    //               style={{
    //                 marginTop: "5px",
    //                 borderTop: "2px solid gray",
    //                 marginBottom: "5px",
    //               }}
    //             />
    //             <p
    //               //   onClick={() => navigate("/notification")}
    //               style={{
    //                 fontSize: "18px",
    //                 fontWeight: "600",
    //                 color: "#0395C4",
    //                 paddingLeft: "5%",
    //                 marginBottom: "5px",
    //               }}
    //               onClick={() => navigate("/notification")}
    //             >
    //               View all
    //             </p>
    //           </Dropdown.Menu>
    //         </Dropdown>
    //       </div>
    //       <div>
    //         <img
    //           src={School}
    //           width="30px"
    //           height="30px"
    //           style={{
    //             cursor: "pointer",
    //             marginTop: "0.35rem",
    //             borderRadius: "50%",
    //           }}
    //           onClick={Schoolprofile}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    // </div>
    <div className="main-container-instructor">
      <div className="d-flex justify-content-between">
        <div className="instructor-header-main-container">
          <p className="para-teacher-instructor-header mt-3">Content</p>
        </div>
        <div className="instructor-header-main-container-1">
          <div className="dropdown-container-main">
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle-instructor ">
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-instructor">
                <div className="instructor-container-div-1">
                  <div className="d-flex justify-content-between">
                    <p className="instructor-container-para">Content_Admin</p>
                    <p className="instructor-container-para">01:00</p>
                  </div>
                  <p className="new-para">New videos was uploaded on th...</p>
                </div>
                <hr className="hr-instructor-header " />
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
              src={School}
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

export default CourseHeader;
