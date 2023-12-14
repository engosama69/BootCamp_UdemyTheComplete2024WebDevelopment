import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

// JSX에서는 속성명을 Camel Case로 표기한다.
// 예) contenteditable -> contentEditable
// <img> 태그에 닫는 태그(/>)를 반드시 포함해줘야 한다.
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="" />
      <img
        className="food-img"
        src="https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg"
        alt="noodle"
      />
      <img
        className="food-img"
        src="https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/1:1/w_2560%2Cc_limit/basic-bulgogi.jpg"
        alt="bulgogi"
      />
      <img 가
        className="food-img"
        src="https://www.bokksumarket.com/cdn/shop/articles/shutterstock_1888873618.jpg?v=1661532101"
        alt="samgyeopsal"
      />
    </div>
  </div>,
  document.getElementById("root"),
);
