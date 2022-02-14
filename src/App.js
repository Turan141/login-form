import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const GreetingWindow = ({ userName }) => {
  const logOutFn = () => {
    localStorage.removeItem('admin');
    return window.location.reload();
  }
  return (
    <>
      <div className='greetings'>
        <h1>Hello {userName}</h1>
        <button onClick={logOutFn}>LogOut</button>
      </div>
    </>
  )
}

const RegisterWindow = () => {
  const ERRORTEXT = document.querySelector('.error')

  const LOGIN = 'admin'
  const PASSWORD = 12345
  const inputLoginRef = useRef()
  const inputPasswordRef = useRef()
  const loginAsAdmin = (e) => {
    e.preventDefault()
    console.log(inputLoginRef)
    if (!inputLoginRef.current.value || !inputPasswordRef.current.value) {
      return console.log('empty field')
    } else if (
      inputLoginRef.current.value === LOGIN &&
      Number(inputPasswordRef.current.value) === PASSWORD
    ) {
      onSuccess()
    } else {
      ERRORTEXT.style.opacity = '100%';
    }
  };
  const onSuccess = () => {
    localStorage.setItem('admin', 'admin')
    window.location.reload()
  };

  return (
    <>
      <div id="wrapper">
        <h3 className={"error"}>Wrong pass</h3>
        <form
          id="signin"
          method=""
          action=""
          autoComplete="off"
          onSubmit={loginAsAdmin}
        >
          <input
            type="text"
            id="user"
            name="user"
            placeholder="username"
            autoComplete="off"
            ref={inputLoginRef}
          />
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="password"
            autoComplete="off"
            ref={inputPasswordRef}
          />
          <button type="submit">&#xf0da;</button>
        </form>
      </div>
    </>
  )
}

function App() {
  const [userName, setUsername] = useState(localStorage.getItem('admin'));

  useEffect(() => {
    setUsername(localStorage.getItem('admin'));
  }, [])

  return (
    <>
      <div className='appmain'>
        {Boolean(userName) ? (
          <GreetingWindow userName={userName} />
        ) : (
          <RegisterWindow value={userName} />
        )}
      </div>
    </>
  )
}
export default App;
