import React from "react";
import { GiTalk } from "react-icons/gi";
import Testimonial1 from "../../assets/image/testimonial-1.jpg";
import Testimonial2 from "../../assets/image/testimonial-2.jpg";
import Testimonial3 from "../../assets/image/testimonial-3.jpg";
import ImgCaomlogo1 from "../../assets/image/com-logo-1.jpg";

const About = () => {
  return (
    <>
      <div>
        <div class=" py-5 bg-dark  mb-5 banner-area">
          <div class="container my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              About Programmer's From India
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb text-uppercase">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li> */}
              </ol>
            </nav>
          </div>
        </div>

        <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-5 align-items-center">
              <h1 class="mb-4">
                What Does Our Clients Say!! <GiTalk />{" "}
              </h1>
              <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to="0"
                    class="active"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide-to="2"
                  ></button>
                </div>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={Testimonial1}
                      alt="Los Angeles"
                      class="d-block"
                      style={{ width: "100%" }}
                    />
                    <div class="carousel-caption">
                      <h3>Los Angeles</h3>
                      <p>We had such a great time in LA!</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Testimonial2}
                      alt="Chicago"
                      class="d-block"
                      style={{ width: "100%" }}
                    />
                    <div class="carousel-caption">
                      <h3>Chicago</h3>
                      <p>Thank you, Chicago!</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Testimonial3}
                      alt="New York"
                      class="d-block"
                      style={{ width: "100%" }}
                    />
                    <div class="carousel-caption">
                      <h3>New York</h3>
                      <p>We love the Big Apple</p>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        

        <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Don't Want To Miss The Chance, Hire Now!!
            </h1>
        <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={ImgCaomlogo1}
                        alt=""
                        style={{ width: "80px", height: "80px;" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">Name</h5>
                        <span className="text-truncate me-3">
                          <i className="fa fa-map-marker-alt text-primary me-2"></i>
                          Experience
                        </span>
                        <span className="text-truncate me-3">
                          <i className="far fa-clock text-primary me-2"></i>
                          Availability
                        </span>
                        <span className="text-truncate me-0">
                          <i className="far fa-money-bill-alt text-primary me-2"></i>
                          Qualification
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div className="d-flex mb-3">
                        <a className="btn btn-light btn-square me-3" href="">
                          <i className="far fa-heart text-primary"></i>
                        </a>
                        <a className="btn btn-primary" href="">
                          Book Now
                        </a>
                      </div>
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        Date Line: 01 Jan, 2045
                      </small>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        

      </div>
    </>
  );
};

export default About;
