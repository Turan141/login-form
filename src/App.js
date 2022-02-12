import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [email, setEmail] = useState("nobody");

  function setEmailFn(newValue) {
    setEmail(newValue);
  }

  const loginFn = () => {
    setLogin({ isLoggedIn: true });
  };

  let activewindow;
  isLoggedIn
    ? (activewindow = <GreetingWindow email={email} />)
    : (activewindow = (
        <RegisterWindow onChange={setEmailFn} value={email} loginFn={loginFn} />
      ));

  return (
    <>
      <div className="appmain">{activewindow}</div>
    </>
  );
}

const GreetingWindow = ({ email }) => {
  return (
    <>
      <div class="greetings">
        <h1>Hello {email}</h1>
      </div>
    </>
  );
};

function RegisterWindow({ onChange, value, loginFn }) {
  let local = localStorage;

  function loginAsAdmin(e) {
    e.preventDefault();
    let user = document.querySelector("#user");
    for (let key in local) {
      if (user.value == key) {
        loginFn();
        onChange(user.value);
      }
    }
  }

  function createAdmin() {
    localStorage.setItem("admin", "admin");
  }

  function modal(e) {
    let modal = document.querySelector(".showpass");
    modal.innerHTML = "NOW YOU CAN ENTER WITH LOG:ADMIN PASS:ADMIN";
  }

  return (
    <>
      <div id="wrapper">
        <form id="signin" method="" action="" autocomplete="off">
          <input type="text" id="user" name="user" placeholder="username" />
          <input type="text" id="pass" name="pass" placeholder="password" />
          <button onClick={loginAsAdmin} type="submit">
            &#xf0da;
          </button>
          <p className="showpass">
            dont have an account{" "}
            <button
              onClick={() => {
                createAdmin();
                modal();
              }}
              class="btn"
            >
              click to create
            </button>
          </p>
        </form>
      </div>
      <div class="modal">
        <h1>default log:admin pass:admin</h1>
      </div>
    </>
  );
}

export default App;
