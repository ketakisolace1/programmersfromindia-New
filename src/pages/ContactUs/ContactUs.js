import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { RiFolderInfoFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div class=" py-5 bg-dark  mb-5 banner-area">
        <div class="container my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb text-uppercase"></ol>
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Contact For Any Query
          </h1>
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div class="d-flex align-items-center bg-light rounded p-4">
                    <div
                      class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-map-marker-alt text-primary">
                        <SiGooglemaps />
                      </i>
                    </div>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div class="d-flex align-items-center bg-light rounded p-4">
                    <div
                      class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-envelope-open text-primary">
                        <RiFolderInfoFill />
                      </i>
                    </div>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div class="d-flex align-items-center bg-light rounded p-4">
                    <div
                      class="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-phone-alt text-primary">
                        <BiSolidPhoneCall />
                      </i>
                    </div>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                style={{ minHeight: "400px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.5s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
