import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="footer-container">
      {/* Flower vase throwing hearts */}
      <div className="flower-vase">
        <div className="vase"></div>
        <div className="heart">❤️</div>
      </div>

      {/* Musical sign */}
      <div className="music-icon" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "🎵" : "🎶"}
      </div>

      {isPlaying && (
        <audio autoPlay loop>
          <source src="path-to-your-audio-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Footer;