import React from "react";
import ReactDOM from "react-dom";

// 세미콜론(')이 아닌 쉼표(,)로 속성을 구분한다.
// 카멜 표기법으로 속성명을 표기한다.
// 속성값은 큰따옴표(")로 감싸서 표현한다.
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// 다음과 같이 색상을 직접 변경할 수 있다.
customStyle.color = "blue";

// JSX에서 스타일은 키-값 형태의 객체(Object) 형태로 적용시킬 수 있다.
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root"),
);
