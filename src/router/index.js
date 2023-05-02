import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginotp from "../pages/auth/signin/Loginotp";
import Setpassword from "../pages/auth/signin/Setpassword";
// import MainContentPage from "../pages/views/dashboard";
import Signin from "./../pages/auth/signin/Signin";
import Dashboard from "./../pages/views/dashboard/Dashboard";
import MainContentPage from "./../pages/views/index";
import InstructorMainPage from "./../pages/views/Instructors/InstructorMainPage";
import Forgotpassword from "./../pages/auth/signin/Forgotpassword";
import StudentsMainPage from "../pages/views/Students/StudentsMainPage";
import ProfileMain from "../pages/views/profile/ProfileMain";
import Notification from "../pages/views/notification/Notification";
import "../App.scss";
function IndexRouters() {
  return (
    <div className="main-route">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login_otp" element={<Loginotp />} />
        <Route path="/set_password" element={<Setpassword />} />
        <Route path="/forgot_password" element={<Forgotpassword />} />
        <Route path="/" element={<MainContentPage />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructor" element={<InstructorMainPage />} />
          <Route path="/student" element={<StudentsMainPage />} />
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default IndexRouters;
