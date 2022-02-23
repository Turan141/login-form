import React, { useState, useRef, useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Edit from './Edit'
import MainWindow from './MainWindow'


function App() {
  return (
    <>
      <header className="navbarDiv">

      </header>
      <div className="navRoute">
        <Link className="navbarElem" to="/admin">
                        Admin
        </Link>
        <Link className="navbarElem" to="/edit">
                        Edit
        </Link>                </div>
      <Routes>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/Admin" element={<MainWindow/>}/>
      </Routes>
    </>
  )
}
export default App
