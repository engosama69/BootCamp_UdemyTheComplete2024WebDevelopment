import React from "react";
import Form from "./Form";

var userIsRegistered = false;

const second = new Date().getSeconds();
second % 2 === 0 ? (userIsRegistered = true) : (userIsRegistered = false);
console.log(second);

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
