import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import HelpSupport from './Components/HelpSupport';
import PrivacyPolicy from "./Components/PrivacyPolicy";
import About from "./Components/About";
import Preview from "./Components/Preview";
import RegisterPage from "./Components/RegisterPage";
import SignInPage from "./Components/SignInPage";
import ResumeTemplate from "./Components/ResumeTemplate"; // Import the new component

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Preview" element={<Preview />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/HelpSupport" element={<HelpSupport />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/ResumeTemplate" element={<ResumeTemplate />} /> {/* Ensure the path matches */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname === "/" ? <Header /> : null;
}

export default App;
