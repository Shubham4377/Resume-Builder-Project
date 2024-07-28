import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content text-center">
          <ul className="footer-links">
            <li><Link to="/HelpSupport">Help & Support</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
          </ul>
          <div className="social-media-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="fs-15">
            &copy; Copyright 2024. All Rights Reserved - <span>build.resume</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
