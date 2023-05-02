import React, { useState } from "react";
import Calendar from "react-calendar";
import Trophy from "../../../assests/images/trophy.svg";
import NoOfStudent from "../../../assests/images/profstudent.svg";
import Clock from "../../../assests/images/clock.svg";
import Spoc from "../../../assests/images/spoc.svg";
import Up from "../../../assests/images/principalup.svg";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-calendar/dist/Calendar.css";
import "./styles/Dashboard.scss";
import { useNavigate } from "react-router-dom";

function DashboardContent() {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const data = [
    {
      id: "1",
      class: "12th",
      noOfStudent: 208,
      averageTime: "43hrs",
      averageScore: "90%",
      rate: "1.9",
    },
    {
      id: "2",
      class: "11th",
      noOfStudent: 189,
      averageTime: "46hrs",
      averageScore: "80%",
      rate: "2",
    },
    {
      id: "3",
      class: "10th",
      noOfStudent: 176,
      averageTime: "51hrs",
      averageScore: "69%",
      rate: "1.8",
    },
    {
      id: "4",
      class: "9th",
      noOfStudent: 222,
      averageTime: "40hrs",
      averageScore: "80%",
      rate: "1.6",
    },
    {
      id: "5",
      class: "8th",
      noOfStudent: 190,
      averageTime: "42hrs",
      averageScore: "82%",
      rate: "1.2",
    },
    {
      id: "6",
      class: "7th",
      noOfStudent: 180,
      averageTime: "50hrs",
      averageScore: "85%",
      rate: "1.5",
    },
    {
      id: "7",
      class: "6th",
      noOfStudent: 210,
      averageTime: "60hrs",
      averageScore: "75%",
      rate: "2",
    },
  ];
  return (
    // <div className="main-container">
    //   <div className=" main-contain-responsive">
    //     <div className=" main-container-2-response">
    //       <div className="main-dash-content d-flex ">
    //         <div className="average-container">
    //           <div className="average-inside-container">
    //             <img src={Trophy} className="target-img" />
    //             <div className="average-content-container">
    //               <p className="average-content">
    //                 Standings
    //                 {/* {item.lang.avergescore} */}
    //               </p>
    //               <p className="average-subcontent">7/23</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="average-container">
    //           <div className="average-inside-container">
    //             <img src={NoOfStudent} className="target-img" />
    //             <div className="average-content-container">
    //               <p className="average-content">
    //                 Number of Students
    //                 {/* {item.lang.avergescore} */}
    //               </p>
    //               <p className="average-subcontent">1395</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="data-container-card">
    //         <div className="average-container">
    //           <div className="average-inside-container">
    //             <img src={Clock} className="target-img" />
    //             <div className="average-content-container">
    //               <p className="average-content">
    //                 Total Time Spent
    //                 {/* {item.lang.avergescore} */}
    //               </p>
    //               <p className="average-subcontent">251hrs</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="average-container">
    //           <div className="average-inside-container">
    //             <img src={Spoc} className="target-img" />
    //             <div className="average-content-container">
    //               <p className="average-content">
    //                 Program SPOC
    //                 {/* {item.lang.avergescore} */}
    //               </p>
    //               <p className="average-subcontent">13</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="average-container1">
    //       <p className="Preparatory">Preparatory Courses Performance</p>
    //       <div className="d-flex justify-content-between">
    //         <div className="average-contain-preparatory">
    //           <div onClick={() => navigate("/student")}>
    //             <p className="average-contain-12-para">12th Standard</p>
    //             <p
    //               style={{
    //                 marginTop: "0px",
    //                 marginBottom: "0px",
    //                 fontSize: "24px",
    //                 fontWeight: "700",
    //               }}
    //             >
    //               80%
    //             </p>
    //             <div className="first_circle">
    //               <CircularProgressbar value={80} text={`2%`} />
    //             </div>
    //             <p className="no-student">No.of.Students: 193</p>
    //           </div>
    //         </div>
    //         <div className="average-contain-11th">
    //           <div>
    //             <p className="standard-para-11th">11th Standard</p>
    //             <p className="para-78">78%</p>
    //             <div className="first_circle">
    //               <CircularProgressbar value={78} text={`1.5%`} />
    //             </div>
    //             <p className="no-student">No.of.Students: 207</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="average-container2">
    //     <p className="average-contain-2-Preparatory">
    //       Foundation Courses Performance
    //     </p>
    //     <div className=" average-container-2-response">
    //       <div className="average-main-container-2">
    //         <div>
    //           <p className="average-container-10th">10th Standard</p>
    //           <p className="average-container-95">95%</p>
    //           <div className="first_circle">
    //             <CircularProgressbar value={95} text={`2%`} />
    //           </div>
    //           <p className="average-contain-2-no">No.of.Students: 199</p>
    //         </div>
    //       </div>
    //       <div className="average-main-container-2 ">
    //         <div>
    //           <p className="average-container-10th">9th Standard</p>
    //           <p className="average-container-95">90%</p>
    //           <div className="first_circle">
    //             <CircularProgressbar value={90} text={`1.5%`} />
    //           </div>
    //           <p style={{ marginBottom: "0px" }}>No.of.Students: 201</p>
    //         </div>
    //       </div>
    //       <div className="average-main-container-2 ">
    //         <div>
    //           <p className="average-container-10th">8th Standard</p>
    //           <p className="average-container-95">65%</p>
    //           <div className="second_circle">
    //             <CircularProgressbar value={65} text={`1.5%`} />
    //           </div>
    //           <p className="average-contain-2-no">No.of.Students: 203</p>
    //         </div>
    //       </div>
    //       <div className="average-main-container-2">
    //         <div>
    //           <p className="average-container-10th">7th Standard</p>
    //           <p className="average-container-95">60%</p>
    //           <div className="second_circle">
    //             <CircularProgressbar value={60} text={`1.5%`} />
    //           </div>
    //           <p style={{ marginBottom: "0px" }}>No.of.Students: 197</p>
    //         </div>
    //       </div>
    //       <div className="average-main-container-2">
    //         <div>
    //           <p className="average-container-10th">6th Standard</p>
    //           <p className="average-container-95">79%</p>
    //           <div className="first_circle">
    //             <CircularProgressbar value={79} text={`1.5%`} />
    //           </div>
    //           <p className="average-contain-2-no">No.of.Students: 195</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="Statistics ">
    //     <div className="Statistics-container-main1">
    //       <p className="Statistics-heading">Statistics</p>
    //       <table className="Statistics-table">
    //         <tbody>
    //           <tr className="table-body-container-1">
    //             <th className="table-body-container-2">Class</th>
    //             <th className="table-body-container-2"> No.of.Students</th>
    //             <th className="table-body-container-2">Average Time</th>
    //             <th className="table-body-container-2">Average Score</th>
    //             <th className="table-body-container-2">Rate</th>
    //           </tr>
    //           {data.map((value) => {
    //             return (
    //               <tr className="table-body-container-3" key={value.id}>
    //                 <td className="table-body-container-4 ">{value.class}</td>
    //                 <td className="table-noofstudent">{value.noOfStudent}</td>
    //                 <td className="table-noofstudent">{value.averageTime}</td>
    //                 <td className="table-noofstudent">
    //                   <div>{value.averageScore}</div>
    //                 </td>
    //                 <td className="table-noofstudent">
    //                   <div>
    //                     {value.rate} <img src={Up} className="table-img" />
    //                   </div>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     </div>
    //     <div className="calendar-main-container">
    //       <p className="calendar-para-head">Calendar</p>
    //       <Calendar onChange={onChange} value={value} className="calendar" />
    //     </div>
    //   </div>
    // </div>
    <div className="teach-main-container">
      <div className="teach-1st-row">
        <div className="assigned-box">
          <p>Number of Students Assigned</p>
          <p>123</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
