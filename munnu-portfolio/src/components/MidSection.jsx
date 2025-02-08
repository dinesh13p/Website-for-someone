import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faEnvelope } from "@fortawesome/free-brands-svg-icons";
import "./MidSection.css";

function MidSection() {
  const [drawers, setDrawers] = useState([false, false, false]);

  const toggleDrawer = (index) => {
    setDrawers((prevDrawers) => {
      const newDrawers = [...prevDrawers];
      newDrawers[index] = !newDrawers[index];
      return newDrawers;
    });
  };

  return (
    <div className="midsection-container">
      {/* Portfolio Cupboard */}
      <div className="cupboard">
        <div className="cupboard-title">Portfolio</div>
        <div className="cupboard-content">
          <button className="cupboard-button" onClick={() => toggleDrawer(0)}>
            Open Drawer
          </button>
          {drawers[0] && (
            <div className="drawer">
              <p>📂 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>
              <p>📜 <a href="/projects" target="_blank">Projects</a></p>
            </div>
          )}
        </div>
      </div>

      {/* Reach Me Cupboard */}
      <div className="cupboard">
        <div className="cupboard-title">Reach Me</div>
        <div className="cupboard-content">
          <button className="cupboard-button" onClick={() => toggleDrawer(2)}>
            Open Drawer
          </button>
          {drawers[2] && (
            <div className="drawer">
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a href="mailto:sandhya@example.com"> Email Me</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} /> 
                <a href="https://www.instagram.com/shsandhyap/" target="_blank" rel="noopener noreferrer"> Instagram</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faFacebook} /> 
                <a href="https://www.facebook.com/shyxn" target="_blank" rel="noopener noreferrer"> Facebook</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faTwitter} /> 
                <a href="https://twitter.com/sandhya" target="_blank" rel="noopener noreferrer"> Twitter</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MidSection;