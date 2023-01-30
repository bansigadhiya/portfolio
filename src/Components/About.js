import React from 'react'

function About() {
  return (
    <div className="about">
      <div className="title mx-auto my-3">
        <h2 className="text-center">About</h2>
      </div>
      <p className="text-center mt-4">I am a student of BCA studying at Red &amp; White institute.I am interested in web Designing and react js developing.</p>
      <div className="row mt-4 align-items-center">
        <div className="col-4">
          <img src="images/about.jpg" alt="about" className="img-fluid ps-4" />
        </div>
        <div className="col-8">
          <div className="about-me">
            <h3 className="mb-1">Web designer &amp; React Js developer</h3>
            <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores harum sed saepe non molestias distinctio vel omnis quaerat! Enim exercitationem reprehenderit</p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Birthday :</strong>
                    <span>6 july 2004</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Email :</strong>
                    <span>bansi672004@gmail.com</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Phone :</strong>
                    <span>889632973</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">City :</strong>
                    <span>Surat , india</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Age :</strong>
                    <span>19</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Degree :</strong>
                    <span>BCA</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">Phone :</strong>
                    <span>889632973</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fa-solid fa-angle-right pe-2" />
                    <strong className="pe-1">City :</strong>
                    <span>Surat , india</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit nostrum, vel obcaecati, cum quidem praese voluptate rem voluptates accusantium laboriosam neque ullam necessitatibus blanditiis nam laudantium repellendus excepturi earum?</p>
          </div>
        </div>
      </div>
      <div className="mt-5 title mx-auto my-3">
        <h2 className="text-center">Skills</h2>
      </div>
      <p className="text-center mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus culpa magnam alias adipisci ipsam quae illo aliquid repellendus</p>
      <div className="row">
        <div className="col-6">
          <div className="skills px-4">
            <ul>
              <li>
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>HTML</h6>
                  <span>95%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
              <li>
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>CSS</h6>
                  <span>90%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
              <li>
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>JAVASCRIPT</h6>
                  <span>75%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="skills pe-4">
            <ul>
              <li>
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>BOOTSRAP</h6>
                  <span>92%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
              <li>
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>WORDPRESS</h6>
                  <span>70%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
              <li className="mb-4">
                <div className="progress-detail d-flex align-items-center justify-content-between">
                  <h6>REACT</h6>
                  <span>80%</span>
                </div>
                <div className="progress rounded-0">
                  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
