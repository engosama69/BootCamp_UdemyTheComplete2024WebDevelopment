import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* isRegistered가 false인 경우에만 해당 요소 출력*/}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
