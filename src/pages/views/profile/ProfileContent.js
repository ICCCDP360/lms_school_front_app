import React, { useState, useEffect } from "react";
import Profiles from "../../../assests/images/school.svg";
import proof from "../../../assests/images/Frame 2148.svg";
import logo from "../../../assests/logo.svg";

function ProfileContent() {
  const [schoolDetails, SetSchoolDetails] = useState("");
  useEffect(() => {
    // const Data = JSON.parse(localStorage.getItem("user"));
    SetSchoolDetails();
  }, []);
  return (
    <div className="profile-content-main-container-1">
      <div className="profile-content-container-1">
        <div className="profile-content-container-2">
          <img className="profile-img mt-5" src={logo} alt="Profile" />
          {/* <p className="profile-para mt-5">{schoolDetails.sch_name}</p> */}
          {/* <p className="profile-para-1">School</p> */}
        </div>
      </div>
      <div className="profile-content-main-container-2">
        <p className="school-info">School Info</p>
        <div className="d-flex justify-content-between w">
          <div className="w-100">
            <p className="para-profile-content">Principal Name</p>
            <input
              className="input-data-1"
              // value={schoolDetails.user_name}
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="para-profile-content">SPOC Name</p>
            <input
              // value={schoolDetails.goadem_admin}
              className="input-data-1"
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">School Name</p>
            <input
              // value={schoolDetails.sch_name}
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Contact Number</p>
            <input
              // value={schoolDetails?.ph_num}
              className="input-data-1"
              type="number"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">School Email</p>
            <input
              // value={schoolDetails?.email}
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Date Of Joining</p>
            <input
              // value={schoolDetails?.dt}
              className="input-data-1"
              type="text"
            />
          </div>
        </div>

        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Address</p>
            <input
              // value={schoolDetails?.address}
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">City </p>
            <input
              // value={schoolDetails?.city}
              className="input-data-1"
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <p className="para-profile-content">Pincode</p>
            <input
              // value={schoolDetails?.pincode}
              className="input-data-1"
              type="text"
            />
          </div>
          <div className="w-100">
            <p className="para-profile-content">State</p>
            <input
              // value={schoolDetails?.state}
              className="input-data-1"
              type="text"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <p className="para-profile-content">Proof</p>
            <img src={proof} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
