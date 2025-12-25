import React, { useState, useEffect } from "react";
import "./App.css";
import shawarmaPepper from "./images/shawarmaPepper.png";
import girlWithBubble from "./images/girlWithBubble.jpg";

function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  // Generate 100 confetti/firework pieces
  const fireworks = Array.from({ length: 100 }, () => ({
    left: Math.random() * 100 + "%",
    size: 5 + Math.random() * 5 + "px",
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    duration: 1 + Math.random() * 2 + "s",
    delay: Math.random() * 0.5 + "s",
    rotate: Math.random() * 360 + "deg",
  }));

  return (
    <div className="App">
      {!clicked ? (
        <div className="container">
          <img src={shawarmaPepper} alt="Shawarma Pepper" className="shawarma" />
          <div className="girl-container">
            <img src={girlWithBubble} alt="Girl" className="girl" />
            <div className="bubble">😊</div>
          </div>
          <button className="blue-button" onClick={() => setClicked(true)}>
            Click Me!
          </button>
        </div>
      ) : (
        <div className="celebration">
          <h1 className="message">სალომე მაგარი მგელი ხარ keep going</h1>
          {fireworks.map((fw, index) => (
            <div
              key={index}
              className="firework-piece"
              style={{
                left: fw.left,
                width: fw.size,
                height: fw.size,
                backgroundColor: fw.color,
                animationDuration: fw.duration,
                animationDelay: fw.delay,
                transform: `rotate(${fw.rotate})`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
