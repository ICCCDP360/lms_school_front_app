import React from "react";
import "./styles/notification.scss";
import { Table } from "react-bootstrap";
function NotificationContent() {
  const data = [
    {
      id: 1,
      title: "Content Admin",
      subdata: "New videos was uploaded on thermodynamics for class 6.",
      timer: "01:00",
    },
    {
      id: 2,
      title: "Content Admin",
      subdata: "New lesson was added in chemistry.",
      timer: "03:32",
    },
    {
      id: 3,
      title: "SPOC",
      subdata: "Your question on thermodynamics was answered.",
      timer: "12:28",
    },
    {
      id: 4,
      title: "Content Admin",
      subdata: "Your question on thermodynamics was answered.",
      timer: "04:08",
    },
  ];
  return (
    <div className="notification-main-container">
      <div className="notify-sub-container"></div>

      <Table
        responsive
        style={{ backgroundColor: "white", borderRadius: "16px" }}
      >
        <thead>
          <tr>
            <th></th>
            <th className="notify-content">First Name</th>
            <th className="notify-content">Last Name</th>
            <th className="notify-content">Username</th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <td></td>
                  <td> {item.title}</td>
                  <td>{item.subdata}</td>
                  <td>{item.timer}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </div>
  );
}

export default NotificationContent;
