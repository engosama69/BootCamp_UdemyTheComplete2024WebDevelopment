import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    // 복잡한 상태 변화 처리
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    setHeadingText(fName + " " + lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

/*
function App() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleFirstNameChange(event) {
    console.log("First Name Changed.");
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    console.log("Last Name Changed.");
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    setHeadingText(fName + " " + lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleFirstNameChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleLastNameChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
*/
