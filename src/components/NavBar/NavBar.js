import React from "react";
import "./NavBar.css";
import MyGallery from "../images";
import Footer from "../footer";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <header className="header">
        <div id="topBar" className="wrapper make-accessible-header"></div>
        <div className="wrapper header-wrapper sticky-nav">
          <div className="container header-container">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/photos/logo.png"}
                alt="Logo"
              />
              <div className="logo-name">ಮಮತೆಯ ಮಡಿಲು</div>
            </div>
            <div class="nav-content">
              <ul class="nav-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="header-right clearfix">
              {/* Your header right content */}
            </div>
          </div>
        </div>
      
      </header>
      <br />
      <MyGallery className="my-gallery" />
      <Footer />
    </div>
  );
}
