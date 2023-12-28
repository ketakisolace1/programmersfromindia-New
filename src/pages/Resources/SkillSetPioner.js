import React from "react";
import carosel1 from "../../assets/image/carousel-1.jpg";
import carosel2 from "../../assets/image/carousel-2.jpg";

const SkillSetPioner = () => {
  return (
    <div>
      <div class=" py-5 bg-dark  mb-5 banner-area">
        <div class="container my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Hire Highly Skilled Developers From India
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

      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Category</option>
                    <option value="1">ReactJs</option>
                    <option value="2">Angular </option>
                    <option value="3">Node Js</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
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

       <div className="container-fluid">
        <div className="row">
          <div className="col">
        <div class="carousel-inner">
          
          <div class="carousel-item active">
          <div class="col-sm-4">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src={ carosel1}
                alt="Card image"
                style={{ width: "50%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="col-sm-4">
            <div class="carousel-item active">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src={carosel2}
                  alt="Card image"
                  style={{ width: "50%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div class="carousel-item">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="../bootstrap4/img_avatar1.png"
                  alt="Card image"
                  style={{ width: "50%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
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
      </div>
    </div>
  );
};

export default SkillSetPioner;
