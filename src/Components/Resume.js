import React from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function Resume() {

  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  }
  return (
      <div className="resume">
        <div className="title mx-auto my-3">
          <h2 className="text-center">My Resume</h2>
        </div>
        <div className="row">
          <div className="col-6 px-5">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item">
              <h4>BANSI GADHIYA</h4>
              <p>I am a student of BCA studying at Red &amp; White institute.I am interested in web Designing and react js developing.</p>
              <ul>
                <li><i className="fa-solid fa-location-dot" />Amroli , surat.</li>
                <li><i className="fa-solid fa-phone" />8849632973</li>
                <li><i className="fa-solid fa-envelope" />bansi672004@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>12<sup>th</sup> Commerce</h4>
              <span className="badge text-white px-3 py-2 rounded-0 mb-2">2020 - 2021</span>
              <p className="mb-1">Ratnasagar Vidhyalay , Amroli</p>
            </div>
            <div className="resume-item mt-3">
              <h4>BCA &amp; Web designing course</h4>
              <span className="badge text-white px-3 py-2 rounded-0 mb-2">2021 - 2022</span>
              <p className="mb-1">Red &amp; White Institute</p>
            </div>
          </div>
          <div className="col-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>web designer</h4>
              <span className="badge text-white px-3 py-2 rounded-0 mb-2">2022</span>
              <p className="mb-0 pb-0">welpel info - katargam</p>
              <p>i completed 3 month intership at welpel info as a web designer.</p>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary mt-5 ms-4" onClick={() => {back()}}><i className="fa-solid fa-arrow-left-long pe-2" />back </button>
      </div>
  )
}

export default Resume
