import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [bgColor, setButtonBgColor] = useState("white");

  function handleClick() {
    console.log("Clicked");
    setHeadingText("Submitted");
  }

  function handleOnMouseOver() {
    console.log("Mouse is on");
    setButtonBgColor("black");
  }

  function handleOnMouseOut() {
    console.log("Mouse is out");
    setButtonBgColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        style={{ backgroundColor: bgColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
