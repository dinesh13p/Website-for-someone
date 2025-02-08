import React, { useState } from "react";
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hello">
      {/* Ribbon-shaped box */}
      <div className="hello1">
        Hello!
      </div>

      {/* Letter-shaped box */}
      <div
        className="hello2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <div className="text-sm">
            Hi, I'm Sandhya Paudel! Welcome to my portfolio.
          </div>
        ) : (
          "📩"
        )}
      </div>
    </div>
  );
}

export default Header;