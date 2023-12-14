import React from "react";

var isDone = false;

function strike() {
  isDone = true;
  // document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  isDone = false;
  // document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      {/* Hook을 사용하지 않아 텍스트 장식이 변경되지 않는다. */}
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
