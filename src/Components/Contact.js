import React from 'react';
import './Style.css';

function Contact() {
  return (
    <div className="contact ">
      <div className="title mx-auto my-3">
        <h2 className="text-center">Contact</h2>
      </div>
      <p className="text-center mt-4">I am a student of BCA studying at Red &amp; White institute.I am interested in
        web Designing and react js developing.</p>
      <div className="map my-3 px-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29748.840599113075!2d72.82609837892332!3d21.24750354632363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0492e6a1ed0a1%3A0xb4b3c256e08f6098!2sGokuldham%20Society!5e0!3m2!1sen!2sin!4v1674391415449!5m2!1sen!2sin" width="100%" height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="row px-3">
        <div className="col-4">
          <div className="info">
            <div className="address d-flex align-items-center">
              <i className="fa-solid fa-location-dot" />
              <div className="detail ps-3">
                <h4 className="mb-0">Location :</h4>
                <p>28,gokuldham society,amroli,surat</p>
              </div>
            </div>
            <div className="email d-flex align-items-center">
              <i className="fa-regular fa-envelope" />
              <div className="detail ps-3">
                <h4 className="mb-0">Email :</h4>
                <p>bansi672004@gmail.com</p>
              </div>
            </div>
            <div className="call d-flex align-items-center ">
              <i className="fa-solid fa-phone" />
              <div className="detail ps-3">
                <h4 className="mb-0">Call :</h4>
                <p>8849632973</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="contact-form">
            <form action>
              <div className="row">
                <div className="col-6 form-group">
                  <input type="text" name="name" className="form-control rounded-0" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-6 form-group">
                  <input type="text" name="email" className="form-control rounded-0" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" name="subject" className="form-control rounded-0" id="subject" placeholder="Your Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control rounded-0" name="message" id="message" rows={5} placeholder="Your Message" defaultValue={""} />
              </div>
              <button type="submit" className="btn my-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
