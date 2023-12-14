import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  console.log(now);

  var [time, setTime] = React.useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function updateTime() {
    setInterval(getTime, 1000); // 1초 마다 반복 실행
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
