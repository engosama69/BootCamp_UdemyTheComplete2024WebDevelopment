import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus]; // ["Apple", ...citrus, "Banana", "Coconut"]

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName, // fullName 객체 안에 있는 내용들을 모두 꺼내서 넣음.
  id: 1,
  userName: "jamesbond007",
};

console.log(user);
