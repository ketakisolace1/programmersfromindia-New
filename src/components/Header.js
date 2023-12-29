import React from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import Logo1 from "../assets/image/final_logo2.png";
import Logo11 from "../assets/image/programers_india_text.png";

const Header = () => {
  return (
  <div>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
            <img className="logo-img" src={Logo1} />
            <img className="logo-img1" src={Logo11} />
                {/* <h1 class="m-0 text-primary">Programmer's From India</h1> */}
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    
                    <Link to={'/home'} class="nav-item nav-link active">Home</Link>
                    <Link to={'/about-us'} class="nav-item nav-link">About Us</Link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Resources </a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <Link to={'/skills'} class="dropdown-item">Skill Set Pioneer</Link>
                            <Link to={'/learnings'} class="dropdown-item">Learning Center</Link>
                        </div>
                    </div>
                    
                        <Link to={"/estimate"} class="nav-item nav-link" >Estimate</Link>
                        {/* <div class="dropdown-menu rounded-0 m-0">
                            <a href="category.html" class="dropdown-item">Job Category</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404</a>
                        </div> */}
                    
                    <Link to={"/join"} class="nav-item nav-link">Join As Developer</Link>
                    <Link to={"/sign-in"} class="nav-item nav-link">Sign Up</Link>
                </div>
                <Link to={"/skills"} class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Track A Developer<i class="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
  </div>
  );
};

export default Header;
