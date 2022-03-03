import React, { useState, useRef, useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Edit } from './Edit'
import { EditV2 } from './EditV2'
import { EditV3 } from './editV3'
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
        </Link>
        <Link className="navbarElem" to="/editV2">
              EditV2
        </Link>
        <Link className="navbarElem" to="/editV3">
              EditV3
        </Link>
      </div>
      <Routes>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/Admin" element={<MainWindow/>}/>
        <Route path="/editv2" element={<EditV2/>}/>
        <Route path="/editv3" element={<EditV3/>}/>

      </Routes>
    </>
  )
}
export default App
