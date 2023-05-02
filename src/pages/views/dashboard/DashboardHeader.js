import React, { useState, useEffect } from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./styles/Dashboard.scss";

function DashboardHeader() {
  // const [schoolDetails, SetSchoolDetails] = useState("");
  useEffect(() => {
    // const Data = JSON.parse(localStorage.getItem("user"));
    // SetSchoolDetails(Data);
  }, []);
  const navigate = useNavigate();

  function Schoolprofile() {
    navigate("/profile");
  }
  return (
    <div>
      <div className="header-response">
        <div style={{ marginLeft: "1%" }}>
          <p
            className="profile_header"
            // style={{
            //   fontSize: "24px",
            //   fontWeight: "700",
            //   color: "#333333",
            //   marginTop: "0px",
            //   marginBottom: "0px",
            // }}
          >
            Welcome, Arjun
            {/* {schoolDetails.sch_name} */}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Last logged in: 18 Jan, 2023 06:00 pm{" "}
          </p>
        </div>
        <div style={{ display: "flex", padding: "1%", paddingBottom: "0px" }}>
          <div className="notify">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "310px",
                  marginLeft: "-250px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>Content_Admin</p>
                    <p style={{ marginBottom: "0px" }}>01:00</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>Content_Admin</p>
                    <p style={{ marginBottom: "0px" }}>02:38</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New lesson was added in chemistry
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>SPOC</p>
                    <p style={{ marginBottom: "0px" }}>12:30</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <p
                  //   onClick={() => navigate("/notification")}
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0395C4",
                    paddingLeft: "5%",
                    marginBottom: "5px",
                  }}
                  onClick={() => navigate("/notification")}
                >
                  View all
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <img
              // src={schoolDetails?.logo}
              src={School}
              width="30px"
              height="30px"
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

export default DashboardHeader;
