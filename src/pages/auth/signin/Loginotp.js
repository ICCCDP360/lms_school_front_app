import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assests/logo.svg";
import "../styles/loginotp.scss";
import Slideshow from "../../views/components/Slider.js/SliderShow";
import { SliderData } from "../../views/components/Slider.js/SliderData";

function Loginotp() {
  const navigate = useNavigate();

  const slideChange = () => {
    navigate("/account_details");
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
            <h1 className="signin-header">Verify</h1>

            <p className="otp-para">Please enter the OTP sent to 786868677 </p>
            <div>
              <div className="otp-main-input">
                <input className="otp-input" />
                <input className="otp-input" />
                <input className="otp-input" />
                <input className="otp-input" />
              </div>
            </div>

            <button className="signin-btn" onClick={slideChange}>
              Verify
            </button>
          </div>
        </div>
        <div className="rightside-container">
          <Slideshow slides={SliderData} />
        </div>
      </div>
    </div>
  );
}

export default Loginotp;
