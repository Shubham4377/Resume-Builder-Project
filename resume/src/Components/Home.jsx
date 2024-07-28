import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="section-one">
        <div className="container">
          <div className="section-one-content">
            <div className="section-one-l">
              <img 
                src="assets/images/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b-removebg-preview.png" 
                alt="Section One Visual" 
              />
            </div>
            <div className="section-one-r text-center">
              <h2 className="lg-title">Use the best resume maker as your guide!</h2>
              <p className="text">
                Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
              </p>
              <div className="btn-group">
                {/* <Link to="/"><li>About</li></Link> */}
            
                <Link to='/about' className="btn btn-secondary text-uppercase">create My Resume</Link>
                <Link to="#" className="btn btn-secondary text-uppercase">watch video</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two bg-bright">
        <div className="container">
          <div className="section-two-content">
            <div className="section-items">
              <div className="section-item">
                <div className="section-item-icon">
                  <img 
                    src="assets/images/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5-removebg-preview.png" 
                    alt="Feature 1" 
                  />
                </div>
                <h5 className="section-item-title">Make a resume that wins interviews!</h5>
                <p className="text">
                  Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers, and even CEOs.
                </p>
              </div>

              <div className="section-item">
                <div className="section-item-icon">
                  <img 
                    src="assets/images/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b-removebg-preview.png" 
                    alt="Feature 2" 
                  />
                </div>
                <h5 className="section-item-title">Resume writing made easy!</h5>
                <p className="text">
                  Resume writing has never been this effortless. Pre-generated text, visual designs, and more - all already integrated into the resume maker. Just fill in your details.
                </p>
              </div>

              <div className="section-item">
                <div className="section-item-icon">
                  <img 
                    src="assets/images/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd-removebg-preview.png" 
                    alt="Feature 3" 
                  />
                </div>
                <h5 className="section-item-title">A recruiter-tested CV maker tool</h5>
                <p className="text">
                  Our resume builder and its pre-generated content are tested by recruiters and IT experts. We help your CV become truly competitive in the hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
