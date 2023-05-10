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
import CourseRoute from "../pages/views/course/CourseRoute";
import Subject from "../pages/views/course/CourseOutlet/Subject";
import CourseContent from "../pages/views/course/CourseOutlet/CourseContent";
import ContentPlayPage from "../pages/views/course/ContentShowPage/ContentPlayPage";
import PractiseText from "../pages/views/course/ExamPage/PractiseText";
import AssessmentText from "../pages/views/course/ExamPage/AssessmentText";
import MainPage from "../pages/auth/signin/MainPage";
import StudentsTeacher from "../pages/views/StudentsTeacher/StudentsTeacher";
import AssessmentResultPage from './../pages/views/course/ResultPage/AssessmentResultPage';
import PractiseResultPage from "../pages/views/course/ResultPage/PractiseResultPage";
function IndexRouters() {
  return (
    <div className="main-route">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path="/sign_in" element={<Signin />} />
        <Route path="/login_otp" element={<Loginotp />} />
        <Route path="/set_password" element={<Setpassword />} />
        <Route path="/forgot_password" element={<Forgotpassword />} />
        <Route path="/" element={<MainContentPage />}>
          {/* <Route path="/dashboard" element={<DashboardTeacher />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructor" element={<InstructorMainPage />} />
          <Route path="/student" element={<StudentsMainPage />} />
          <Route path="/teacher/student" element={<StudentsTeacher />} />
          <Route path="/profile" element={<ProfileMain />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/course" element={<CourseRoute />}>
            <Route path="/course/subject" element={<Subject />} />
            <Route path="/course/content" element={<CourseContent />} />
          </Route>
          <Route path='/contentshow' element={<ContentPlayPage/>}/>
          <Route path='/practise_text' element={<PractiseText/>}/>
          <Route path='/practise_result' element={<PractiseResultPage/>}/>
          <Route path='/assessment_text' element={<AssessmentText/>}/>
          <Route path='/assessment_result' element={<AssessmentResultPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default IndexRouters;
