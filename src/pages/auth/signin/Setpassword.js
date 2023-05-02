import React, { useState } from "react";
import logo from "../../../assests/logo.svg";

import "../styles/mainpage.scss";
import Slideshow from "./../../views/components/Slider.js/SliderShow";
import { SliderData } from "./../../views/components/Slider.js/SliderData";
import { Modal } from "react-bootstrap";
import tick from "../../../assests/images/Rectangle 160.svg";

function Setpassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <h1 className="signin-header">Reset Password</h1>
            <p className="signin-username">New Password</p>
            <div className="user-container">
              <input
                className="input-field-user"
                type="text"
                placeholder="Enter new password"
              />
            </div>{" "}
            <p className="signin-username">Confirm Password</p>
            <div className="user-container">
              <input
                className="input-field-user"
                type="text"
                placeholder="Confirm Password"
              />
            </div>
            <button className="signin-btn" onClick={handleShow}>
              set
            </button>
          </div>
        </div>
        <div className="rightside-container">
          <Slideshow slides={SliderData} />
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          style={{ width: "27%", marginLeft: "40%", marginTop: "13%" }}
        >
          <Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={tick}
                style={{
                  width: "23%",
                }}
              />

              <p>Your password has been set successfully</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Setpassword;
