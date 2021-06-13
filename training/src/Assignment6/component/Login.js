import React, { useState } from "react";
export default function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmitLogin = (event) => {
    console.log(" login " + props.renderMove);
    event.preventDefault();
    props.renderMove();
  };
  return (
    <div className={"container"}>
      <div className={"app-wrapper-login"}>
        <div>
          <h2 className={"heading"}>Login</h2>
        </div>
        <form className={"form-wrapper"}>
         
          <div className={"email"}>
            <label className={"label"}>Email Address</label>
            <input className={"input"} type="email" />
          </div>
          <div className={"password"}>
            <label className={"label"}>Password</label>
            <input className={"input"} type="password" />
          </div>
          <div>
            <button className={"submit"} onClick={handleFormSubmitLogin}>
              log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}