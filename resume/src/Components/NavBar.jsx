import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar bg-white">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler">
            <Link to="/" className="navbar-brand">
              <img src="assets/images/curriculum-vitae.png" alt="" className="navbar-brand-icon" />
              <span className="navbar-brand-text">
                build <span>resume.</span>
              </span>
            </Link>
            <div className="Resume-buttons">
              <Link to="/ResumeTemplate" className="btn btn-link">
                Resume Templates
              </Link>
              <Link to="/cv-maker" className="btn btn-link">
                CV Maker
              </Link>
              <Link to="/pricing" className="btn btn-link">
                Pricing
              </Link>
              <Link to="/features" className="btn btn-link">
                Features
              </Link>
            </div>  
            <div className="navbar-buttons">
              <Link to="/RegisterPage" className="btn btn-primary">
                Register
              </Link>
              <Link to="/SignInPage" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
