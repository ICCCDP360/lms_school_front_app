import React, { useState } from "react";
import logo from "../../../assests/logo.svg";

import "../styles/mainpage.scss";
import Slideshow from "./../../views/components/Slider.js/SliderShow";
import { SliderData } from "./../../views/components/Slider.js/SliderData";
import { useNavigate } from "react-router-dom";
import signInService from "../../../services/signInService";

function Signin() {
  const navigate = useNavigate();
  const [schoolId, SetSchoolID] = useState("");
  const [schoolPasscode, SetSchoolPasscode] = useState("");
  const [error, setError] = useState("");

  const APISignin = () => {
    return new Promise((resolve, reject) => {
      let data = {
        user_name: schoolId,
        password: schoolPasscode,
      };
      signInService
        .SignInpage(data)
        .then((res) => {
          console.log(res,'manoj');
          if (res.message == "User Not found") {
            setError("User Not found");
          } else {
            localStorage.setItem("access_tokens", res.access_tokens);
            localStorage.setItem("_id",res.response._id)
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          if (err.response.data == "Wrong Password") {
              setError("Wrong Password");
            }
          reject(false);
        });
    });
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
            <h1 className="signin-header">Sign in</h1>
            <p className="signin-username">User Name</p>
            <div className="user-container">
              <input
                onChange={(e) => {
                  SetSchoolID(e.target.value);
                }}
                className="input-field-user"
                type="text"
                placeholder="Enter username"
              />
            </div>{" "}
            <p className="signin-username"> Password</p>
            <div className="user-container">
              <input
                onChange={(e) => {
                  SetSchoolPasscode(e.target.value);
                }}
                className="input-field-user"
                type="password"
                placeholder=" Password"
              />
            </div>
            <p
              className="d-flex justify-content-end mb-0"
              style={{ color: "#0395C4", cursor: "pointer" }}
              onClick={() => navigate("/forgot_password")}
            >
              Forgot Password ?
            </p>
            <p className="mb-0 mt-0" style={{color:'red'}}>{error}</p>
            <button className="signin-btn" onClick={APISignin}>
              Sign in
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

export default Signin;
