import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [bgColor, setButtonBgColor] = useState("white");

  function handleChange(event) {
    console.log(`Content Changed : ${event.target.value}`);
    setName(event.target.value);
  }

  function handleOnMouseOver() {
    console.log("Mouse is over");
    setButtonBgColor("black");
  }

  function handleClick(event) {
    console.log("Button Clicked");
    setHeadingText(name);

    event.preventDefault(); // 새로고침 막기
  }

  function handleOnMouseOut() {
    console.log("Mouse is out");
    setButtonBgColor("white");
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          style={{ backgroundColor: bgColor }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
