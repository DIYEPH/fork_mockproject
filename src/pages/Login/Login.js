import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import loginImage from "../../assets/images/login_page_image.png"; // Nhập hình ảnh

function Login() {
  return (
    <div className="wrapper d-flex container">
      <div className="left col-md-6 col-sm-12">
        <div>
          <h2 className="header">Digital</h2>
          <h4 className="welcome">
            Welcome back! Please login to your account.
          </h4>
          <div className="content">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="bottom-form">
                <label className="log_checkbut">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a className="link_forgot" href="/forgot">
                  Forgot password?
                </a>
              </div>
              <div className="buttons col-6">
                <button
                  type="submit"
                  className="btn btn-primary no-border-radius"
                >
                  Login
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-primary no-border-radius"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className="login-more row">
              <div className="text-more col-12 col-md-3">Or login with</div>
              <div className="col-12 col-md-3">
                <a href="https://facebook.com">Facebook</a>
              </div>
              <div className="col-12 col-md-3">
                <a href="https://linkedin.com">LinkedIn</a>
              </div>
              <div className="col-12 col-md-3">
                <a href="https://google.com">Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right col-md-6 col-sm-0">
        <img src={loginImage} alt="Login" className="img-fluid" />
      </div>
    </div>
  );
}

export default Login;
