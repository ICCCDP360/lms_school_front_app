import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./index.scss";
import Sidebarbottom from "./../../components/sidebar/Sidebarbottom";
function MainContentPage() {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="large-size-container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
      <div className="d-block d-lg-none">
        <div className="small-size-container">
          <div className="outlet-area">
            <Outlet />
          </div>
          <div className="sidebar-area">
            <Sidebarbottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContentPage;
