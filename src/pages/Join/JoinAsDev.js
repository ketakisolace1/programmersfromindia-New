import React from "react";

const JoinAsDev = () => {
  return (
    <div>
      <div class=" py-5 bg-dark  mb-5 banner-area">
        <div class="container my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Find The Best Job By Joining Us.
          </h1>
          <div className="d-flex mb-6">
            <a className="btn btn-primary joinUs" href="">
              Apply Now
            </a>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb text-uppercase">
              {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li> */}
            </ol>
          </nav>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Explore By Category
          </h1>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="cat-item rounded p-4" href="">
                
                <h6 className="mb-3">React Js Developers</h6>
                <p className="mb-0"></p>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a className="cat-item rounded p-4" href="">
                
                <h6 className="mb-3">Node Js Developers</h6>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a className="cat-item rounded p-4" href="">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h6 className="mb-3">Dot Net Developers</h6>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <a className="cat-item rounded p-4" href="">
               
                <h6 className="mb-3">Laravel Developers</h6>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a className="cat-item rounded p-4" href="">
               
                <h6 className="mb-3">Angular Developers</h6>
              </a>
            </div>
            
           
            
           
            
          </div>
        </div>
      </div>


    </div>
  );
};

export default JoinAsDev;
