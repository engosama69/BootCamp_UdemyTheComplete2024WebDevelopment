var React = require("react");
var ReactDOM = require("react-dom");

// render(WHAT TO SHOW, WHERE TO SHOW IT)
ReactDOM.render(<div> <h1>Hello World!</h1><p>This is paragraph</p> </div>, document.getElementById("root"));

// render의 첫번째 인자에는 무조건 1개의 요소만 넣을 수 있다.
// <h1>Hello World!</h1> (o)
// <h1>Hello World!</h1><p>This is paragraph</p> (x)

// 2개 이상의 요소를 넣고 싶다면, <div> 요소 안에 해당 요소들을 넣어 표현하면 된다.
// <div> <h1>Hello World!</h1><p>This is paragraph</p> </div>

// 위의 내용과 같다.
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
