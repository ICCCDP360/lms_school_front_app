import React, { useState } from 'react'
import Language from "../../../assests/images/language.svg";
import logo from "../../../assests/logo.svg";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import schoolIdService from '../../../services/schoolId'
import Slideshow from '../../views/components/Slider.js/SliderShow';
import { SliderData } from '../../views/components/Slider.js/SliderData';
import { useFormik } from 'formik';
import * as yup from "yup";


function MainPage() {
    const [schoolId,setSchoolId]=useState()
    const [error,setError]=useState('')
  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: yup.object().shape({
      number: yup.string().required("School Id Is Required"),
    }),
    onSubmit: (values) => {
      APISignin(values?.number);
    },
  });

  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  const tamilLang = () => {
    localStorage.setItem("lang", "tamil");
    window.location.reload();
  };

  const APISignin = () =>{
    return new Promise((resolve, reject) => {
        let trigger = {
            schoolId: schoolId,
        };
        schoolIdService
          .SchoolIdpage(trigger)
          .then((res) => {
            navigate('/sign_in')
            localStorage.setItem('school_id',res.schoolId)
          })
          .catch((err) => {
            if (err.response.data == "School Not Found") {
                setError("Account not found");
              }
              reject(false);
          });
      });
  }

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
            <p className="signin-username mt-4">School Id</p>
            <div className="user-container">
              <input
                onChange={(e) => {
                    setSchoolId(e.target.value);
                }}
                className="input-field-user"
                type="text"
                placeholder="School Id"
              />
            </div>
            <p style={{color:'red'}}>{error}</p>
            <button className="signin-btn" onClick={APISignin}>
              Next
            </button>
          </div>
        </div>
        <div className="rightside-container">
          <Slideshow slides={SliderData} />
        </div>
      </div>
    </div>
  )
}

export default MainPage