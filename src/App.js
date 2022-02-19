import React, {useState, useRef } from "react";
import "./App.css";
import userJSON from './data.json'

const GreetingWindow = ({ userName }) => {
    const logOutFn = () => {
        localStorage.removeItem('admin');
        return window.location.reload();

    }
    return (
        <>
            <div className='greetings'>
                <h1>Hello {userName}</h1>
                <button className="logoutbtn" onClick={logOutFn}>LogOut</button>
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
    const [userName] = useState(localStorage.getItem('admin'))
    const [isEditMode, setEditMode] = useState(false)

    function makeInput(e) {
        e.target.disabled = true
        setEditMode(true)
        let btn = document.querySelectorAll('.saveEditBtn')
        btn.forEach((e) =>{
           e.classList.add('show')
        })


        e.target.parentNode.parentNode.childNodes[0].innerHTML =
            `<input value=${e.target.parentNode.parentNode.childNodes[0].innerHTML}>`
        e.target.parentNode.parentNode.childNodes[1].innerHTML =
            `<input value=${e.target.parentNode.parentNode.childNodes[1].innerHTML}>`
        console.log(e.target)
    }

    let isLoggenIn = Boolean(userName)

    let userData = userJSON.map((elem) =>{
        return(
            <tr key={elem.name}>
                <td>{elem.name}</td>
                <td>{elem.username}</td>
                <td className="idInput">{elem.id}</td>
                {isLoggenIn ?<td><button disabled={false} onClick={makeInput} className="editBtn">Edit</button> </td>: null}
                {isEditMode ? <td><button className="saveEditBtn hidden">Save</button></td> : null}

            </tr>)
     })
    const userListTable = <div className="userListDiv">
        <table>
            <thead>
                <tr className="tableHeader">
                    <td >Full Name</td>
                    <td>Username</td>
                    <td>ID</td>
                    {isLoggenIn ? <td>Edit</td> : null}
                </tr>
            </thead>
          <tbody>
            {userData}
          </tbody>
        </table>
    </div>
    return (
        <>
            <div className='appmain'>
                {isLoggenIn ? (
                    <>
                    <GreetingWindow userName={userName} />
                    {userListTable}
                    </>
                ) : (
                    <>
                    <RegisterWindow value={userName} />
                    {userListTable}
                    </>
                )}
            </div>
        </>
    )
}
export default App;
