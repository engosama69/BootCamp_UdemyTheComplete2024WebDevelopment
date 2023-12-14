import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // 스프레드 연산자를 이용하여 간략하게 줄일 수 있다.
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value, // [yourKeyValue]

        // React에서 state를 업데이트할 때, state의 특정 속성을 동적으로 업데이트하기 위해 대괄호를 사용한다.
        // 일반적으로, JavaScript 객체의 속성을 업데이트할 때 점 표기법을 사용할 수 있다.
        // 예를 들어, prevValue.name = value와 같이 직접적으로 객체의 속성을 업데이트할 수 있다.
        // 그러나 이 경우, 우리는 name 변수가 동적으로 변하기를 원한다.
        // JavaScript에서 객체 속성에 접근할 때, 대괄호 표기법을 사용하여 동적으로 속성에 접근할 수 있다.
        // 여기서 [name]은 Computed Property Names라 불리는 것으로, 변수 name의 값에 따라 객체의 속성을 동적으로 설정한다.
        // 이를 통해 handleChange 함수가 다양한 input 요소에서 재사용될 수 있다.
        // 예를 들어, name="fName"인 input 요소의 경우 handleChange가 호출되면 name 값은 "fName"이 되어 contact 객체의 "fName" 속성을 업데이트한다.
        // 이렇게 함으로써, 코드의 재사용성과 유연성을 높일 수 있다.
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
