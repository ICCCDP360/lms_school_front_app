import React from "react";
import School from "../../../assests/images/school.svg";
import Notification from "../../../assests/images/notifyblack.svg";
import { useNavigate } from "react-router";

function NotificationHeader() {
  const navigate = useNavigate();

  function Schoolprofile() {
    navigate("/profile");
  }

  return (
    // <div style={{ width: "100%", padding: "2%", display: "flex" }}>
    //   <div style={{ width: "50%" }}>
    //     <p
    //       style={{
    //         marginBottom: "0px",

    //         fontSize: "24px",
    //         fontWeight: "700",
    //         width: "60px",
    //       }}
    //     >
    //       Nofification
    //     </p>
    //   </div>
    //   <div style={{ width: "50%", marginLeft: "85%" }}>
    //     <img src={notifi} style={{ marginRight: "10px" }} />
    //     <img src={Profile} style={{ marginLeft: "15px" }} />
    //   </div>
    // </div>
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginLeft: "1%" }}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#333333",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Notification
            </p>
          </div>
          <div
            style={{
              display: "flex",
              paddingBottom: "0px",
              paddingRight: "1%",
            }}
          >
            <div style={{ marginRight: "30px" }}>
              <img src={Notification} />
            </div>
            <div>
              <img
                src={School}
                style={{ cursor: "pointer" }}
                onClick={Schoolprofile}
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default NotificationHeader;
