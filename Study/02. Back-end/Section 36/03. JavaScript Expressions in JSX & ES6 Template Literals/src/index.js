import React from "react";
import ReactDOM from "react-dom";

const fName = "starrykss";
const lName = "kim";
const luckyNumber = Math.floor(Math.random() * 100) + 1; // 랜덤 숫자 생성

// HTML 코드 안에 자바스크립트 코드를 포함시키고 싶다면 중괄호({})를 이용한다.
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root"),
);