import React from "react";
import ImgCaomlogo1 from "../../assets/image/com-logo-1.jpg";

const Explore = () =>{
    return(
        <div>
            <div class=" py-5 bg-dark  mb-5 banner-area">
          <div class="container my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Look out for the best ReactJs Developers Here!
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
    );
};

export default Explore;