import React, { useEffect, useState } from "react"
import "./App.css"



const GreetingWindow = ({ email }) => {
    return (
        <>
            <div className="greetings">
                <h1>Hello {email}</h1>
            </div>
        </>
    );
};

const RegisterWindow = ({ onChange, loginFn }) => {
    let local = localStorage
    let errorText = document.querySelector(".error")
    const logPass = {
        login: 'admin',
        pass: 'admin'
    }

    const handleSubmit = () => {
        return loginAsAdmin()
    }

    const loginAsAdmin = (e) => {
        e.preventDefault()
        let user = document.querySelector('#user')
        let pass = document.querySelector('#pass')
        for (let key in local) {
            if (!user.value) {
                return
        }else if (user.value === logPass.login && pass.value === logPass.pass) {
                loginFn()
                onChange(user.value)
                setLoggedIn()

            } else {
                errorText.style.opacity = "100%"
            }
        }
    }

    const createAdmin = () => {
        localStorage.setItem('admin', 'admin')
    }

    const setLoggedIn = () => {
        return localStorage.setItem('online', 'true')
    }

    return (
        <>
            <div id="wrapper">
                <h3 className={"error"}>Wrong pass</h3>
                <form id="signin" method="" action="" autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" id="user" name="user" placeholder="username" autoComplete="off" />
                    <input type="password" id="pass" name="pass" placeholder="password" autoComplete="off" />
                    <button onClick={loginAsAdmin} type="submit">
                        &#xf0da;
                    </button>
                    <p className="showpass">
                        dont have an account{" "}
                        <button
                            onClick={() => {
                                createAdmin()
                            }}
                            className="btn"
                        >
                            click to create
                        </button>
                    </p>
                </form>
            </div>
        </>
    );
}


function App() {
    const [isLoggedIn, setLogin] = useState(false);
    const [email, setEmail] = useState('offline');

    useEffect(() => {
        setEmail(localStorage.getItem('admin'))
    }, [])

    const setEmailFn = (newValue) => {
        setEmail(newValue)
    }

    const loginFn = () => {
        setLogin({ isLoggedIn: true })
    }

    let isOnline = localStorage.getItem('online')

    return (
        <>
            <div className="appmain">{isOnline ? <GreetingWindow email={email} /> : <RegisterWindow
                onChange={setEmailFn} value={email} loginFn={loginFn} />}</div>
        </>
    )
}
export default App;