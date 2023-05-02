import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assests/logo.svg";
import { SliderData } from "../../views/components/Slider.js/SliderData";
import Slideshow from "../../views/components/Slider.js/SliderShow";

import "../styles/forgotpassword.scss";

function Forgotpassword() {
  const navigate = useNavigate();

  const slideChange = () => {
    navigate("/dashboard");
  };

  return (
    <div className="signIn-container">
      <img src={logo} style={{ marginLeft: "28px", marginTop: "22px" }} />

      <div className="school-administration">
        <p style={{ fontSize: "18px", fontWeight: "700", marginTop: "5%" }}>
          School Administration
        </p>
      </div>

      <div className="center-container">
        <div className="leftside-container">
          <div className="innerside">
            <h1 className="signin-header">Forgot Password</h1>

            <p className="signin-username">Username</p>
            <div className="user-container">
              <input className="input-field-user" type="text" value="" />
            </div>

            <button className="signin-btn" onClick={slideChange}>
              Next
            </button>

            <h6
              className="mt-5 "
              style={{
                color: "#0395C4",
                display: "flex",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Find Account ?
            </h6>
          </div>
        </div>
        <div className="rightside-container">
          <Slideshow slides={SliderData} />
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
