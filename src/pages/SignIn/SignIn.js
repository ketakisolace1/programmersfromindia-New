import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="container-fluid">
        <div class=" py-5 bg-dark  mb-5 banner-area">
          <div class="container my-5 pt-5 pb-4">
            <div className="row">
              <div className="col-6">
                <h1 class=" text-white mb-3 animated slideInDown">
                  Sign Up To Hire The Best Developers Accross India!
                </h1>
                <div className="col">
                  <form action="/action_page.php">
                    <div class="mb-3 mt-3">
                      <label for="email" class="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="pwd" class="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                      />
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                        />{" "}
                        Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
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
      </div>
    </>
  );
};

export default SignIn;
