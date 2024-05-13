import React from "react";
import "./footer.css"; // Assuming the CSS file is named Footer.css
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
        <div className="social-media-icons">
          <SocialIcon className="social-icon" url="https://www.instagram.com" /> 
          <SocialIcon className="social-icon" url="https://www.facebook.com" />
          <a href="/contact">
          
            &nbsp; Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
