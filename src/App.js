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
    const [userName, setUsername] = useState(localStorage.getItem('admin'))

    // Ново-добавленные функции

    const [data, dataSet] = useState([])

    let isLoggenIn = Boolean(userName)
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        (async function fetchData() {
            try {
                const response = await fetch(url);
                const json = await response.json();
                dataSet(json);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, [])

     const userTd = data.map((elem) =>{
         return(
         <tr>
             <td key={elem.name}>{elem.name}</td>
             <td key={elem.address.city}>{elem.address.city}</td>
             <td key={elem.id}>{elem.id}</td>
             {isLoggenIn ? <button key={elem.email} className="redactBtn">Редактировать</button> : null}
         </tr>)
     })

// ---------------------------------------


    const userListTable = <div className="userListDiv">
        <table>
            <tbody>
            <tr className="tableHeader">
                <td >Имя</td>
                <td>Город</td>
                <td>ID</td>
                {isLoggenIn ? <td>Redact</td> : null}
            </tr>
            {userTd}
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
